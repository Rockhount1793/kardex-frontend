<template>
<div>

  <VueFileAgent
    :class=upload.clase
    ref="vueFileAgent"
    :theme="'list'"
    :axis="'y'"
    :multiple="upload.multiple"
    :deletable="true"
    :editable="false"
    :meta="upload.meta"
    :accept="upload.tipo"
    :maxSize="upload.limit"
    :maxFiles="upload.cantmax"
    :linkable="false"
    :helpText="upload.text+`${upload.limit}`"
    :errorText="{type: 'Invalid file type', size:'File weight wrong!'}"
    @select="filesSelected($event)"
    @beforedelete="onBeforeDelete($event)"
    @delete="fileDeleted($event)"
    v-model="fileRecords"
    :resumable="false"
  ></VueFileAgent>

  <!--theme: grid/list -->
  <div class="p-2 centrado">
    
    <img v-if="fileRecords.length == 1" id="image-input" width="500" height="500" :src="fileRecords[0].urlResized">
    
    <div v-if="fileRecords.length >= 2" :class=" `grid grid-cols-3 gap-4 p-1`">
      
      <span :key="key" v-for="(file,index,key) in fileRecords">
        <img  id="" width="500" height="500" class="" :src="file.urlResized">
      </span>

    </div>

    <!--<img id="image-preview" width="500" height="500" v-if="image_compress" :src="image_compress">-->
  </div>

<!--<button @click="compress_image">compress_image</button>-->

</div>
</template>

<script>

    import Store from '@/store/index'

    export default {

        name:'Subir-Archivo-Home',

        components:{  },
    
        data(){
            return {
              fileRecords: [],
              uploadHeaders: {},
              fileRecordsForUpload: [], // maintain an upload queue
              image_compress:''
            };
        },

        props:{
          upload: { default(){ return upload} },
        },

        methods: {

             make_blob(dataURL){
 
                 const BASE64_MARKER = ';base64,';
                 const parts = dataURL.split(BASE64_MARKER);
                 const contentType = parts[0].split(':')[1];
                 const raw = window.atob(parts[1]);
                 const rawLength = raw.length;
                 const uInt8Array = new Uint8Array(rawLength);
 
                 for (let i = 0; i < rawLength; ++i) {
                     uInt8Array[i] = raw.charCodeAt(i);
                 }
 
                 return new Blob([uInt8Array], { type: contentType });
 
             },

            compress_image(){
                // Set the Width and Height you want your resized image to be
                var width = 500; 
                var height = 500; 

                var canvas = document.createElement('canvas');  // Dynamically Create a Canvas Element
                canvas.width  = width;  // Set the width of the Canvas
                canvas.height = height;  // Set the height of the Canvas
                var ctx = canvas.getContext("2d");  // Get the "context" of the canvas
                var img = document.getElementById("image-input");  // The id of your image container
                ctx.drawImage(img,0,0,width,height);  // Draw your image to the canvas

                var jpegFile = canvas.toDataURL("image/jpg");
                this.image_compress = jpegFile


            },


             uploadFiles(){

                  // Using the default uploader. You may use another uploader instead.
                  //this.$refs.vueFileAgent.upload(this.upload.url, this.uploadHeaders, this.fileRecordsForUpload);

                  for(var i= 0; i < this.fileRecords.length; i++){
                    //alert(this.fileRecordsForUpload[i])
                    //Store.dispatch('store_files',{'archive':this.fileRecords[i],'url':this.upload.url, 'datos':this.datos})
                    this.fileRecordsForUpload = [];
                    //this.fileRecords = [];
                  }

                  //Store.dispatch('store_files',{'archive':this.fileRecords[0],'url':this.upload.url})
                  //this.fileRecordsForUpload = [];
    
             },
      
              deleteUploadedFile(fileRecord){
                  // Using the default uploader. You may use another uploader instead.
                  this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord);
              },

              filesSelected(fileRecordsNewlySelected){
                  var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
                  this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
              },
      
              onBeforeDelete(fileRecord){

                  var i = this.fileRecordsForUpload.indexOf(fileRecord);
                  if (i !== -1) {
                  // queued file, not yet uploaded. Just remove from the arrays
                    this.fileRecordsForUpload.splice(i, 1);
                    var k = this.fileRecords.indexOf(fileRecord);
                    if (k !== -1) this.fileRecords.splice(k, 1);
                  } else {
                    //if (confirm('Are you sure you want to delete?')) {
                    //  this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
                    //}
                    this.$refs.vueFileAgent.deleteFileRecord(fileRecord);
                  }

              },

              fileDeleted(fileRecord){

                  var i = this.fileRecordsForUpload.indexOf(fileRecord);
                  if(i !== -1){
                    this.fileRecordsForUpload.splice(i, 1);
                  }else{
                    this.deleteUploadedFile(fileRecord);
                  }

              }
    

        },

        filters:{},

        mounted(){
 

        },

        watch:{

          fileRecords(){
              this.$emit('image',this.fileRecords)
          }

        }
    
    }
    
</script>

<style scoped>
    .vue-file-agent,.vue-file-agent *{
        -webkit-box-sizing:border-box;
        box-sizing:border-box
    }
    .is-drag-over *{
        pointer-events:none!important
    }
    .is-drag-over:before{
        content:" "
    }
    .is-disabled .vue-file-agent{
        opacity:.65;
        pointer-events:none
    }
    .grid-box-item{
        -webkit-transition-duration:.6s;
        transition-duration:.6s
    }
    .grid-box-enter,.grid-box-leave-to{
        opacity:0!important;
        -webkit-transform:translateZ(0) scale(.25)!important;
        transform:translateZ(0) scale(.25)!important
    }
    .grid-box-leave-active{
        position:absolute!important
    }
    .is-readonly .vue-file-agent.file-input-wrapper{
        border:0
    }
    .vue-file-agent .file-preview-wrapper{
        display:inline-block;
        margin:5px;
        position:relative;
        vertical-align:top;
        margin:16px;
        margin:8px
    }
    .vue-file-agent .file-preview-wrapper:before{
        content:" ";
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background:rgba(0,0,0,.25)
    }
    .vue-file-agent .file-category-video-playable .file-preview .file-preview-overlay,.vue-file-agent .file-preview-wrapper-image .file-preview .file-preview-overlay{
        content:" ";
        background:rgba(0,0,0,.25);
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        z-index:-1
    }
    .vue-file-agent .file-category-video-playable .file-preview:before,.vue-file-agent .file-preview-wrapper-image .file-preview:before{
        -webkit-box-shadow:inset 0 40px 20px -25px rgba(0,0,0,.5);
        box-shadow:inset 0 40px 20px -25px rgba(0,0,0,.5);
        height:40px
    }
    .vue-file-agent .file-category-video-playable .file-preview:after,.vue-file-agent .file-preview-wrapper-image .file-preview:after{
        -webkit-box-shadow:inset 0 -40px 20px -25px rgba(0,0,0,.5);
        box-shadow:inset 0 -40px 20px -25px rgba(0,0,0,.5);
        height:40px
    }
    .vue-file-agent .file-category-audio-playable .file-preview .file-icon,.vue-file-agent .file-category-video-playable .file-preview .file-icon,.vue-file-agent .file-preview-wrapper-image .file-preview .file-icon{
        display:none
    }
    .vue-file-agent .file-category-video-playable .file-preview .file-preview-overlay{
        z-index:1
    }
    .vue-file-agent .file-preview-wrapper-image .file-preview.dark-content .file-preview-overlay{
        background:hsla(0,0%,100%,.25)
    }
    .vue-file-agent .file-preview{
        position:relative;
        z-index:1;
        float:left;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-align:center;
        -ms-flex-align:center;
        align-items:center;
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center;
        z-index:9
    }
    .vue-file-agent .file-preview:after,.vue-file-agent .file-preview:before{
        content:" ";
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        z-index:2;
        top:auto;
        height:25px
    }
    .vue-file-agent .file-preview:before{
        height:28px;
        top:0;
        bottom:auto
    }
    .vue-file-agent .file-preview .file-preview-img{
        max-width:100%;
        max-height:100%;
        background:url('data:image/svg+xml;
        utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 16 16"><rect x="0" y="0" width="100%" height="100%" fill="rgba(255, 255, 255, 0.1)" /><rect x="50%" y="0" width="50%" height="50%" fill="rgba(0, 0, 0, 0.075)" /><rect x="0" y="50%" width="50%" height="50%" fill="rgba(0, 0, 0, 0.075)" /></svg>');
        background-repeat:repeat;
        position:absolute;
        left:50%;
        top:50%;
        -webkit-transform:translate(-50%,-50%);
        transform:translate(-50%,-50%)
    }
    .vue-file-agent .file-preview .file-preview-img-clone{
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        -o-object-fit:cover;
        object-fit:cover;
        -webkit-filter:blur(10px);
        filter:blur(10px);
        height:100%;
        width:100%
    }
    .vue-file-agent .file-preview .file-name{
        position:absolute;
        top:0;
        left:0;
        right:0;
        padding:0 5px;
        z-index:4;
        text-align:center;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        line-height:28px;
        height:28px;
        font-size:16px
    }
    .vue-file-agent .file-preview .file-delete{
        cursor:pointer;
        position:absolute;
        right:0;
        top:0;
        padding:0;
        font-size:16px;
        background:transparent;
        height:28px;
        width:22px;
        display:block;
        color:#fff;
        color:hsla(0,0%,100%,.75);
        z-index:500
    }
    .vue-file-agent .file-preview .file-delete svg{
        width:1em;
        height:1em;
        fill:currentColor;
        vertical-align:middle
    }
    .vue-file-agent .file-preview .file-icon{
        z-index:455;
        position:absolute;
        top:50%;
        height:72px;
        width:72px;
        margin-top:-36px;
        left:50%;
        margin-left:-36px
    }
    .vue-file-agent .file-preview .file-icon svg{
        width:72px;
        height:72px;
        fill:#fff
    }
    .vue-file-agent .file-preview .file-ext{
        text-align:left;
        left:0;
        z-index:3
    }
    .vue-file-agent .file-preview .file-ext,.vue-file-agent .file-preview .file-size{
        position:absolute;
        font-size:16px;
        text-transform:uppercase;
        display:block;
        right:0;
        bottom:0;
        line-height:25px;
        padding:0 5px
    }
    .vue-file-agent .file-preview .file-size{
        text-align:right;
        z-index:4
    }
    .vue-file-agent .file-preview .image-dimension .image-dimension-height,.vue-file-agent .file-preview .image-dimension .image-dimension-width{
        display:inline-block
    }
    .vue-file-agent .file-preview .image-dimension .image-dimension-width:after{
        content:"x"
    }
    .vue-file-agent .file-preview .image-dimension{
        position:absolute;
        font-size:12px;
        text-align:center;
        display:block;
        width:100%;
        right:0;
        bottom:0;
        line-height:25px;
        padding:0 5px;
        z-index:4
    }
    .vue-file-agent .file-preview .file-ext,.vue-file-agent .file-preview .file-name,.vue-file-agent .file-preview .file-size,.vue-file-agent .file-preview .image-dimension,.vue-file-agent .file-preview .image-dimension .image-dimension-width:after{
        color:#fff
    }
    .vue-file-agent.has-multiple .file-preview,.vue-file-agent.is-single .is-deletable .file-preview{
        z-index:11
    }
    .vue-file-agent .is-deletable .file-preview .file-name{
        padding-right:20px
    }
    .vue-file-agent.no-meta .file-preview .file-ext,.vue-file-agent.no-meta .file-preview .file-name,.vue-file-agent.no-meta .file-preview .file-size,.vue-file-agent.no-meta .file-preview .image-dimension,.vue-file-agent.no-meta .file-preview:after,.vue-file-agent.no-meta .file-preview:before{
        display:none
    }
    .vue-file-agent .file-preview-new{
        text-align:center;
        padding:8px;
        z-index:1
    }
    .vue-file-agent .file-preview-new:before{
        background:rgba(0,0,0,.05)
    }
    .vue-file-agent .file-preview-new svg{
        fill:#aaa;
        margin-top:16%;
        height:36%
    }
    .vue-file-agent .file-preview-new .help-text{
        color:#aaa;
        text-align:center;
        font-size:16px;
        line-height:20px;
        height:20px;
        display:block
    }
    .vue-file-agent .file-preview-new .file-preview{
        z-index:8
    }
    .vue-file-agent .file-preview-new .file-preview:after,.vue-file-agent .file-preview-new .file-preview:before{
        display:none
    }
    .vue-file-agent .file-av-wrapper .file-av-action{
        width:60px;
        height:60px;
        left:50%;
        position:absolute;
        top:50%;
        margin-top:-30px;
        margin-left:-30px;
        background:transparent;
        border-radius:50%;
        z-index:800;
        cursor:pointer
    }
    .vue-file-agent .file-av-wrapper .file-av-play,.vue-file-agent .file-av-wrapper .file-av-stop{
        width:50%;
        height:50%;
        position:absolute;
        left:25%;
        top:25%;
        display:none
    }
    .vue-file-agent .file-av-wrapper .file-av-play{
        height:60%;
        width:60%;
        left:20%;
        top:20%;
        display:block
    }
    .vue-file-agent .file-av-wrapper .file-av-play svg,.vue-file-agent .file-av-wrapper .file-av-stop svg{
        fill:#fff;
        width:100%;
        height:100%
    }
    .vue-file-agent .file-av-wrapper audio,.vue-file-agent .file-av-wrapper video{
        position:absolute;
        left:0;
        right:0;
        z-index:799;
        top:0;
        bottom:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.75)
    }
    .vue-file-agent .file-is-playing-av .file-av-wrapper .file-av-stop{
        display:block
    }
    .vue-file-agent .file-is-playing-av .file-av-wrapper .file-av-play{
        display:none
    }
    .vue-file-agent .file-progress{
        display:block;
        height:3px;
        z-index:3;
        position:absolute;
        left:0;
        right:0;
        overflow:hidden;
        top:32px;
        top:1px;
        top:0;
        height:28px;
        height:4px;
        margin-top:1px;
        margin-left:1px;
        margin-right:1px
    }
    .vue-file-agent .file-progress .file-progress-bar{
        background:#fac525;
        display:block;
        height:100%;
        -webkit-transition:all .1s;
        transition:all .1s;
        width:0
    }
    .vue-file-agent .file-progress.has-file-progress{
        background:hsla(0,0%,100%,.5);
        -webkit-box-shadow:0 2px 10px -1px rgba(0,0,0,.75);
        box-shadow:0 2px 10px -1px rgba(0,0,0,.75)
    }
    .vue-file-agent .file-progress.file-progress-full .file-progress-bar{
        background:#54d500
    }
    .vue-file-agent .file-progress.file-progress-done{
        width:5px!important;
        height:5px!important;
        right:0!important;
        left:auto!important;
        border-radius:50%;
        -webkit-box-shadow:-1px 1px 2px 0 rgba(0,0,0,.75);
        box-shadow:-1px 1px 2px 0 rgba(0,0,0,.75)
    }
    .vue-file-agent .file-progress.file-progress-done .file-progress-bar{
        background:#54d500
    }
    .vue-file-agent .file-input{
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        width:100%;
        height:100%;
        opacity:0;
        z-index:10;
        cursor:pointer
    }
    .vue-file-agent.file-input-wrapper{
        position:relative;
        border:2px dashed #aaa;
        text-align:center;
        -webkit-transition:all .6s;
        transition:all .6s
    }
    .is-drag-over .vue-file-agent.file-input-wrapper,.vue-file-agent.file-input-wrapper.is-drag-over{
        border-color:#f61a1a;
        -webkit-box-shadow:inset 0 0 20px 1px #f61a1a;
        box-shadow:inset 0 0 20px 1px #f61a1a
    }
    .is-drag-valid.is-drag-over .vue-file-agent.file-input-wrapper,.vue-file-agent.file-input-wrapper.is-drag-valid.is-drag-over{
        border-color:#54d500;
        -webkit-box-shadow:inset 0 0 20px 1px #54d500;
        box-shadow:inset 0 0 20px 1px #54d500
    }
    .vue-file-agent .file-error-wrapper{
        position:absolute;
        left:0;
        right:0;
        color:#fff;
        bottom:25px;
        z-index:499;
        padding:10px;
        top:28px;
        font-size:14px;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-align:center;
        -ms-flex-align:center;
        align-items:center
    }
    .vue-file-agent .file-error-wrapper .file-error-message{
        background:#ea2626;
        width:100%;
        height:auto;
        color:#fff;
        padding:0 5px;
        display:block
    }
    .vue-file-agent .is-editable .file-name{
        cursor:pointer
    }
    .vue-file-agent .is-editable .file-name .file-name-input{
        color:inherit;
        background:transparent;
        font-weight:inherit;
        padding:inherit;
        margin:inherit;
        border:0;
        outline:0;
        position:absolute;
        left:0;
        width:100%;
        text-align:inherit;
        opacity:0;
        z-index:-5
    }
    .vue-file-agent .is-editable .file-name .file-name-edit-icon svg{
        height:1em;
        width:1em;
        margin-right:2px;
        opacity:.5;
        fill:currentColor;
        vertical-align:middle;
        margin-top:-2px
    }
    .vue-file-agent .is-editable.is-edit-input-focused .file-name{
        border-bottom:1px solid currentColor
    }
    .vue-file-agent .is-editable.is-edit-input-focused .file-name .file-name-edit-icon,.vue-file-agent .is-editable.is-edit-input-focused .file-name .file-name-text{
        display:none
    }
    .vue-file-agent .is-editable.is-edit-input-focused .file-name .file-name-input{
        opacity:1;
        z-index:2
    }
    .is-sorting .vue-file-agent .active-sorting-item,.is-sorting .vue-file-agent .file-preview-wrapper{
        -webkit-transition-duration:0s;
        transition-duration:0s
    }
    .is-sorting-active .vue-file-agent .file-preview-wrapper{
        opacity:.75
    }
    .is-sorting-active .vue-file-agent .active-sorting-item{
        opacity:1
    }
    .is-sortable-immediately .vue-file-agent .file-preview-wrapper,.is-sortable-immediately .vue-file-agent .file-preview-wrapper *{
        cursor:move
    }
    .vue-file-agent .file-preview-wrapper .file-sortable-handle{
        position:absolute;
        z-index:900;
        cursor:move;
        border-radius:50%;
        background:hsla(0,0%,100%,.95);
        color:#222;
        margin:0;
        width:33px;
        height:33px;
        left:5px;
        top:5px;
        padding:4px
    }
    .vue-file-agent .file-preview-wrapper .file-sortable-handle svg{
        fill:currentColor;
        width:100%;
        height:100%;
        vertical-align:top
    }
    .grid-block-wrapper .grid-block{
        width:50%;
        border:1px solid transparent;
        margin:0!important;
        min-width:156px
    }
    .grid-block-wrapper{
        padding:2px
    }
    .grid-block-wrapper .grid-block .file-preview{
        width:100%;
        height:0;
        padding-bottom:75%;
        padding-bottom:100%
    }
    .is-readonly .grid-block-wrapper{
        padding:0;
        margin:-1px
    }
    @media (min-width:576px){
        .grid-block-wrapper .grid-block{
            width:33.3333%;
            border-width:2px
        }
        .grid-block-wrapper{
            padding:2px
        }
        .is-readonly .grid-block-wrapper{
            padding:0;
            margin:-2px
        }
    }
    @media (min-width:768px){
        .grid-block-wrapper .grid-block{
            width:25%
        }
    }
    @media (min-width:992px){
        .grid-block-wrapper .grid-block{
            width:20%
        }
    }
    @media (min-width:1200px){
        .grid-block-wrapper .grid-block{
            width:16.6666%
        }
    }
    @media (min-width:1440px){
        .grid-block-wrapper .grid-block{
            width:16.6666%
        }
    }
    .grid-block-wrapper.is-compact .grid-block,.theme-list .vue-file-agent .file-preview-wrapper{
        width:100%
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview{
        height:53px;
        padding:0
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview:after,.theme-list .vue-file-agent .file-preview-wrapper .file-preview:before{
        -webkit-box-shadow:none;
        box-shadow:none
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview:before{
        background:#dcdcdf;
        left:53px;
        right:0;
        top:0;
        bottom:0;
        height:100%
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-icon,.theme-list .vue-file-agent .file-preview-wrapper .file-preview .thumbnail{
        width:100%;
        left:0;
        margin:0;
        top:0;
        bottom:0;
        height:100%;
        width:53px
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .thumbnail{
        z-index:12
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-icon svg{
        height:46px;
        width:46px;
        margin-top:4px
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-progress{
        z-index:2;
        top:0;
        right:0;
        bottom:0;
        -webkit-box-shadow:none;
        box-shadow:none
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-ext,.theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-name{
        background:transparent
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-ext,.theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-name,.theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-progress{
        left:53px;
        text-align:left;
        color:#333
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-size{
        color:#333
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-name{
        font-weight:700
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .file-delete{
        color:#e55353;
        color:#777;
        background:transparent
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .image-dimension{
        left:53px;
        text-align:left;
        margin-left:53px;
        right:auto;
        width:auto
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-preview .image-dimension,.theme-list .vue-file-agent .file-preview-wrapper .file-preview .image-dimension .image-dimension-width:after{
        color:#666
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-error-wrapper{
        top:0;
        left:0;
        bottom:0;
        padding:5px;
        left:53px;
        text-align:left;
        height:100%;
        color:#ea2626;
        font-weight:700;
        background:transparent;
        display:block
    }
    .theme-list .vue-file-agent .file-preview-wrapper.is-deletable .file-error-wrapper{
        right:17px
    }
    .theme-list .vue-file-agent .file-preview-wrapper .file-sortable-handle{
        margin:0;
        left:10px;
        top:10px
    }
    .theme-list .vue-file-agent .file-preview-new{
        padding:0
    }
    .theme-list .vue-file-agent .file-preview-new svg{
        height:36px;
        width:36px;
        margin:0;
        position:absolute;
        left:10px;
        top:8px
    }
    .theme-list .vue-file-agent .file-preview-new .help-text{
        padding:5px;
        text-align:left;
        position:absolute;
        top:0;
        left:53px;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-align:center;
        -ms-flex-align:center;
        align-items:center;
        right:0;
        bottom:0;
        height:100%
    }
    .theme-list .vue-file-agent .file-av-wrapper .file-av-action{
        width:53px;
        height:53px;
        margin:0;
        left:0;
        top:0
    }
    .theme-list .vue-file-agent .file-av-wrapper .file-av-play,.theme-list .vue-file-agent .file-av-wrapper .file-av-stop{
        width:50%;
        height:50%;
        position:absolute;
        left:25%;
        top:25%
    }
    .theme-list .grid-box-enter,.theme-list .grid-box-leave-to{
        -webkit-transform:translate3d(0,-20px,0)!important;
        transform:translate3d(0,-20px,0)!important;
        opacity:0!important
    }
    .theme-list .grid-box-leave-active{
        position:absolute!important;
        left:0!important
    }
    .theme-list .grid-block-wrapper .grid-block{
        border-width:2px
    }
    .theme-list.is-readonly .grid-block-wrapper{
        padding:0;
        margin:-2px
    }
    
</style>