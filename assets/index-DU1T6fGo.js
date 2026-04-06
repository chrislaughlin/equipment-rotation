var e=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=`modulepreload`,n=function(e){return`/equipment-rotation/`+e},r={},i=function(e,i,a){let o=Promise.resolve();if(i&&i.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=n(i,a),i in r)return;r[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``;if(a)for(let t=e.length-1;t>=0;t--){let n=e[t];if(n.href===i&&(!o||n.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=o?`stylesheet`:t,o||(l.as=`script`),l.crossOrigin=``,l.href=i,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),o)return new Promise((e,t)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})},a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,l=(t=>typeof e<`u`?e:typeof Proxy<`u`?new Proxy(t,{get:(t,n)=>(typeof e<`u`?e:t)[n]}):t)(function(t){if(typeof e<`u`)return e.apply(this,arguments);throw Error(`Dynamic require of "`+t+`" is not supported`)}),u=(e,t)=>()=>(e&&(t=e(e=0)),t),d=(e,t)=>{for(var n in t)a(e,n,{get:t[n],enumerable:!0})},f=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of s(t))!c.call(e,i)&&i!==n&&a(e,i,{get:()=>t[i],enumerable:!(r=o(t,i))||r.enumerable});return e},p=e=>f(a({},`__esModule`,{value:!0}),e),m,h,g,_,v,y=u(()=>{m=new Map,h=[],g=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=m.get(e);if(r===void 0)m.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=h.indexOf(e);t!==-1&&h.splice(t,1);for(let t=0;t<h.length;t++)if(m.get(h[t]).priority<=n){h.splice(t,0,e);return}h.push(e)}return}throw TypeError(`not a valid backend`)},_=async e=>{let t=m.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},v=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?h:n,i,a=[],o=new Set;for(let e of r){let t=await _(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),b=u(()=>{y()}),x,S=u(()=>{x=`1.24.3`}),C,w,ee=u(()=>{S(),C=`warning`,w={wasm:{},webgl:{},webgpu:{},versions:{common:x},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);C=e}},get logLevel(){return C}},Object.defineProperty(w,`logLevel`,{enumerable:!0})}),T,E=u(()=>{ee(),T=w}),D,O,k=u(()=>{D=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}else throw Error(`Can not access image data`)},O=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),A,te,ne,re,ie,ae,oe=u(()=>{ge(),A=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new he(`float32`,u,[1,4,n,r]):new he(`float32`,u,[1,3,n,r])},te=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,A(o,s)}else throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(A(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return A(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},ne=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new he({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},re=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new he({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},ie=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new he({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},ae=(e,t,n)=>new he({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),se,ce,le,ue,de=u(()=>{se=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),ce=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),le=!1,ue=()=>{if(!le){le=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(se.set(`int64`,BigInt64Array),ce.set(BigInt64Array,`int64`)),t&&(se.set(`uint64`,BigUint64Array),ce.set(BigUint64Array,`uint64`)),r?(se.set(`float16`,n),ce.set(n,`float16`)):se.set(`float16`,Uint16Array)}}}),fe,pe,me=u(()=>{ge(),fe=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},pe=(e,t)=>{switch(e.location){case`cpu`:return new he(e.type,e.data,t);case`cpu-pinned`:return new he({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new he({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new he({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new he({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),he,ge=u(()=>{k(),oe(),de(),me(),he=class{constructor(e,t,n){ue();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=se.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=se.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=ce.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=fe(i);if(this.cpuData&&a!==this.cpuData.length&&!((r===`uint4`||r===`int4`)&&Math.ceil(a/2)===this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return te(e,t)}static fromTexture(e,t){return ne(e,t)}static fromGpuBuffer(e,t){return re(e,t)}static fromMLTensor(e,t){return ie(e,t)}static fromPinnedBuffer(e,t,n){return ae(e,t,n)}toDataURL(e){return D(this,e)}toImageData(e){return O(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return pe(this,e)}}}),_e,ve=u(()=>{ge(),_e=he}),j,ye,be,xe,Se,Ce,we=u(()=>{ee(),j=(e,t)=>{(typeof w.trace>`u`?!w.wasm.trace:!w.trace)||console.timeStamp(`${e}::ORT::${t}`)},ye=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),j(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},be=e=>{(typeof w.trace>`u`?!w.wasm.trace:!w.trace)||ye(`BEGIN`,e)},xe=e=>{(typeof w.trace>`u`?!w.wasm.trace:!w.trace)||ye(`END`,e)},Se=e=>{(typeof w.trace>`u`?!w.wasm.trace:!w.trace)||console.time(`ORT::${e}`)},Ce=e=>{(typeof w.trace>`u`?!w.wasm.trace:!w.trace)||console.timeEnd(`ORT::${e}`)}}),Te,Ee=u(()=>{y(),ve(),we(),Te=class e{constructor(e){this.handler=e}async run(e,t,n){be(),Se(`InferenceSession.run`);let r={},i={};if(typeof e!=`object`||!e||e instanceof _e||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof _e)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof _e)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];t instanceof _e?s[e]=t:s[e]=new _e(t.type,t.data,t.dims)}return Ce(`InferenceSession.run`),xe(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){be(),Se(`InferenceSession.create`);let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await v(o),l=await s.createInferenceSessionHandler(a,c);return Ce(`InferenceSession.create`),xe(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),De,Oe=u(()=>{Ee(),De=Te}),ke=u(()=>{}),Ae=u(()=>{}),je=u(()=>{}),Me=u(()=>{});d({},{InferenceSession:()=>De,TRACE:()=>j,TRACE_EVENT_BEGIN:()=>Se,TRACE_EVENT_END:()=>Ce,TRACE_FUNC_BEGIN:()=>be,TRACE_FUNC_END:()=>xe,Tensor:()=>_e,env:()=>T,registerBackend:()=>g});var Ne=u(()=>{b(),E(),Oe(),ve(),ke(),Ae(),we(),je(),Me()}),Pe=u(()=>{}),Fe={};d(Fe,{default:()=>Re});var Ie,Le,Re,ze=u(()=>{Xu(),pt(),it(),Ie=`ort-wasm-proxy-worker`,Le=globalThis.self?.name===Ie,Le&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:ft(n.wasm).then(()=>{Ru(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;zu(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=Uu(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;Wu(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:Gu(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;qu(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},Yu([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:Ju(n),postMessage({type:t});break;default:}}catch(e){postMessage({type:t,err:e})}}),Re=Le?null:e=>new Worker(e??Je,{type:`module`,name:Ie})}),Be={};d(Be,{default:()=>He});async function Ve(e={}){var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&self.name?.startsWith(`em-pthread`);t.mountExternalData=(e,n)=>{e.startsWith(`./`)&&(e=e.substring(2)),(t.Zc||=new Map).set(e,n)},t.unmountExternalData=()=>{delete t.Zc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,ae:!0}).buffer.constructor;let a=e=>async(...n)=>{try{if(t.$c)throw Error(`Session already started`);let r=t.$c={Nd:n[0],errors:[]},i=await e(...n);if(t.$c!==r)throw Error(`Session mismatch`);t.gd?.flush();let a=r.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{t.$c=null}};t.jsepInit=(e,n)=>{if(e===`webgpu`){[t.gd,t.Dd,t.Hd,t.jd,t.Gd,t.ac,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=n;let e=t.gd;t.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),t.jsepGetBuffer=t=>e.getBuffer(t),t.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),t.jsepOnCreateSession=t=>{e.onCreateSession(t)},t.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},t.jsepOnRunStart=t=>e.onRunStart(t),t.Ld=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){let e=n[0];[t.Zd,t.vd,t.webnnEnsureTensor,t.xd,t.webnnDownloadTensor,t.Yd,t.webnnEnableTraceEvent]=n.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.xd,t.webnnRegisterMLContext=t.Yd,t.webnnOnRunStart=t=>e.onRunStart(t),t.webnnOnRunEnd=e.onRunEnd.bind(e),t.webnnOnReleaseSession=t=>{e.onReleaseSession(t)},t.webnnCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),t.webnnRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),t.webnnCreateMLContext=t=>e.createMLContext(t),t.webnnRegisterMLConstant=(n,r,i,a,o,s)=>e.registerMLConstant(n,r,i,a,o,t.Zc,s),t.webnnRegisterGraphInput=e.registerGraphInput.bind(e),t.webnnIsGraphInput=e.isGraphInput.bind(e),t.webnnRegisterGraphOutput=e.registerGraphOutput.bind(e),t.webnnIsGraphOutput=e.isGraphOutput.bind(e),t.webnnCreateTemporaryTensor=e.createTemporaryTensor.bind(e),t.webnnIsGraphInputOutputTypeSupported=e.isGraphInputOutputTypeSupported.bind(e)}};let o=()=>{let e=e=>(...t)=>{let n=en;return t=e(...t),en==n?t:new Promise((e,t)=>{cn={resolve:e,reject:t}})};(()=>{for(let n of[`_OrtAppendExecutionProvider`,`_OrtCreateSession`,`_OrtRun`,`_OrtRunWithBinding`,`_OrtBindInput`])t[n]=e(t[n])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o?.()};var s,c,l=(e,t)=>{throw t},u=import.meta.url,d=``;if(n||r){try{d=new URL(`.`,u).href}catch{}r&&(c=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),s=async e=>{if(C(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)}}var f,p,m,h,g,_,v=console.log.bind(console),y=console.error.bind(console),b=v,x=y,S=!1,C=e=>e.startsWith(`file://`);function w(){Ae.buffer!=T.buffer&&se()}if(i){let e=function(n){try{var r=n.data,i=r.Uc;if(i===`load`){let n=[];self.onmessage=e=>n.push(e),_=()=>{postMessage({Uc:`loaded`});for(let t of n)e(t);self.onmessage=e};for(let e of r.Ad)t[e]&&!t[e].proxy||(t[e]=(...t)=>{postMessage({Uc:`callHandler`,zd:e,args:t})},e==`print`&&(b=t[e]),e==`printErr`&&(x=t[e]));Ae=r.Vd,se(),p=r.Wd,de(),sa()}else if(i===`run`){(function(e){var t=(w(),A)[e+52>>>2>>>0];e=(w(),A)[e+56>>>2>>>0],Tr(t,t-e),J(t)})(r.Tc),_r(r.Tc,0,0,1,0,0),De(),L(r.Tc),ee||=(pr(),!0);try{je(r.Pd,r.dd)}catch(e){if(e!=`unwind`)throw e}}else r.target!==`setimmediate`&&(i===`checkMailbox`?ee&&Gt():i&&(x(`worker: received unknown command ${i}`),x(r)))}catch(e){throw vr(),e}};var ee=!1;self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}var T,E,D,O,k,A,te,ne,re,ie,ae,oe=!1;function se(){var e=Ae.buffer;t.HEAP8=T=new Int8Array(e),D=new Int16Array(e),t.HEAPU8=E=new Uint8Array(e),O=new Uint16Array(e),t.HEAP32=k=new Int32Array(e),t.HEAPU32=A=new Uint32Array(e),te=new Float32Array(e),ne=new Float64Array(e),re=new BigInt64Array(e),ie=new BigUint64Array(e)}function ce(){oe=!0,i?_():vi.tb()}function le(e){throw x(e=`Aborted(`+e+`)`),S=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),g?.(e),e}function ue(){return{a:{ma:Si,hb:xi,g:Pe,J:Ie,f:Ve,o:He,h:Ue,ha:We,b:Ge,T:Ke,Ia:Je,n:Ye,_:$e,Ya:et,Ea:tt,Ga:nt,Za:rt,Wa:it,Pa:at,Va:ot,ka:st,Fa:ct,Ca:lt,Xa:ut,Da:dt,cb:ft,ea:vt,xa:yt,va:Dt,da:kt,O:At,H:jt,wa:F,Z:Vt,ya:I,Sa:Ht,Aa:Kt,Ja:Jt,ta:R,fa:Yt,Ra:L,$a:Xt,R:dn,s:vn,c:St,ib:yn,y:bn,M:xn,D:Sn,m:Cn,t:wn,jb:Tn,I:z,S:B,j:En,v:Dn,r:On,l:kn,Ma:V,Na:Mn,Oa:U,Ka:Nn,La:W,ua:Fn,eb:In,bb:Rn,u:Vn,aa:Hn,ga:Un,ab:Ln,V:Wn,_a:Gn,Ba:Kn,F:Pn,U:qn,la:Qn,za:$n,gb:Zn,fb:er,Ta:ir,Ua:ar,Ha:xe,$:or,ja:sr,Qa:cr,ia:ur,lb:aa,na:Qi,mb:ia,oa:Zi,G:Hi,d:Ei,q:wi,w:Ci,B:Ii,pb:Ji,K:zi,x:Oi,pa:Yi,X:$i,ba:qi,nb:ra,ob:na,ra:Ui,qa:Ki,qb:Wi,N:Bi,Y:Xi,e:Di,A:ki,k:Ti,kb:oa,p:ji,z:Mi,C:Ai,E:Ni,L:Li,rb:Vi,Q:ea,ca:Ri,W:ta,sb:Fi,sa:Pi,P:Gi,i:dr,a:Ae,db:ye}}}async function de(){function e(e,n){var r=vi=e.exports;e={};for(let[t,n]of Object.entries(r))typeof n==`function`?(r=Qt(n),e[t]=r):e[t]=n;return vi=e,vi=function(){var e=vi,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).ub=t(e.ub),e.Yb=n(e.Yb),e._b=t(e._b),e.mc=t(e.mc),e.nc=n(e.nc),e.rc=t(e.rc),e}(),we.push(vi.$b),fr=(e=vi).ub,pr=e.vb,t._OrtInit=e.wb,t._OrtGetLastError=e.xb,t._OrtCreateSessionOptions=e.yb,t._OrtAppendExecutionProvider=e.zb,t._OrtAddFreeDimensionOverride=e.Ab,t._OrtAddSessionConfigEntry=e.Bb,t._OrtReleaseSessionOptions=e.Cb,t._OrtCreateSession=e.Db,t._OrtReleaseSession=e.Eb,t._OrtGetInputOutputCount=e.Fb,t._OrtGetInputOutputMetadata=e.Gb,t._OrtFree=e.Hb,t._OrtCreateTensor=e.Ib,t._OrtGetTensorData=e.Jb,t._OrtReleaseTensor=e.Kb,t._OrtCreateRunOptions=e.Lb,t._OrtAddRunConfigEntry=e.Mb,t._OrtReleaseRunOptions=e.Nb,t._OrtCreateBinding=e.Ob,t._OrtBindInput=e.Pb,t._OrtBindOutput=e.Qb,t._OrtClearBoundOutputs=e.Rb,t._OrtReleaseBinding=e.Sb,t._OrtRunWithBinding=e.Tb,t._OrtRun=e.Ub,t._OrtEndProfiling=e.Vb,t._JsepOutput=e.Wb,t._JsepGetNodeName=e.Xb,mr=e.Yb,hr=t._free=e.Zb,gr=t._malloc=e._b,_r=e.bc,vr=e.cc,yr=e.dc,br=e.ec,xr=e.fc,Sr=e.gc,Cr=e.hc,q=e.ic,wr=e.jc,Tr=e.kc,J=e.lc,Er=e.mc,Y=e.nc,Dr=e.oc,Or=e.pc,kr=e.qc,Ar=e.rc,jr=e.sc,Mr=e.tc,Nr=e.uc,Pr=e.vc,Fr=e.wc,Ir=e.xc,Lr=e.yc,Rr=e.zc,zr=e.Ac,Br=e.Bc,Vr=e.Cc,Hr=e.Dc,Ur=e.Ec,Wr=e.Fc,Gr=e.Gc,Kr=e.Hc,qr=e.Ic,Jr=e.Jc,Yr=e.Kc,Xr=e.Lc,Zr=e.Mc,Qr=e.Nc,$r=e.Oc,ei=e.Pc,ti=e.Rc,ni=e.Sc,ri=e.bd,ii=e.cd,ai=e.hd,oi=e.kd,si=e.ld,ci=e.md,li=e.nd,X=e.od,ui=e.pd,di=e.qd,fi=e.rd,pi=e.wd,mi=e.Rd,hi=e.Sd,gi=e.Td,_i=e.Ud,p=n,vi}var n,r=ue();return t.instantiateWasm?new Promise(n=>{t.instantiateWasm(r,(t,r)=>{n(e(t,r))})}):i?e(new WebAssembly.Instance(p,ue()),p):(ae??=t.locateFile?t.locateFile?t.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,d):d+`ort-wasm-simd-threaded.jsep.wasm`:new URL(`/equipment-rotation/assets/ort-wasm-simd-threaded.jsep-C887KxcQ.wasm`,``+import.meta.url).href,n=await async function(e){var t=ae;if(!f&&!C(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){x(`wasm streaming compile failed: ${e}`),x(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!f)try{var t=await s(e);return new Uint8Array(t)}catch{}if(e==ae&&f)e=new Uint8Array(f);else{if(!c)throw`both async and sync fetching of the wasm failed`;e=c(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){x(`failed to asynchronously prepare wasm: ${e}`),le(e)}}(t,e)}(r),e(n.instance,n.module))}class fe{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var pe=e=>{e.terminate(),e.onmessage=()=>{}},me=[],he=0,ge=null,_e=e=>{Se.length==0&&(ke(),Oe(Se[0]));var t=Se.pop();if(!t)return 6;Ce.push(t),Te[e.Tc]=t,t.Tc=e.Tc;var n={Uc:`run`,Pd:e.Od,dd:e.dd,Tc:e.Tc};return t.postMessage(n,e.ud),0},ve=0,j=(e,t,...n)=>{var r,i=16*n.length,a=Y(),o=Er(i),s=o>>>3;for(r of n)typeof r==`bigint`?((w(),re)[s++>>>0]=1n,(w(),re)[s++>>>0]=r):((w(),re)[s++>>>0]=0n,(w(),ne)[s++>>>0]=r);return e=yr(e,0,i,o,t),J(a),e};function ye(e){if(i)return j(0,1,e);if(m=e,!(0<ve)){for(var t of Ce)pe(t);for(t of Se)pe(t);Se=[],Ce=[],Te={},S=!0}l(0,new fe(e))}function be(e){if(i)return j(1,0,e);xe(e)}var xe=e=>{if(m=e,i)throw be(e),`unwind`;ye(e)},Se=[],Ce=[],we=[],Te={},Ee=e=>{var t=e.Tc;delete Te[t],Se.push(e),Ce.splice(Ce.indexOf(e),1),e.Tc=0,br(t)};function De(){we.forEach(e=>e())}var Oe=e=>new Promise(n=>{e.onmessage=r=>{var i=r.data;if(r=i.Uc,i.ad&&i.ad!=mr()){var a=Te[i.ad];a?a.postMessage(i,i.ud):x(`Internal error! Worker sent a message "${r}" to target pthread ${i.ad}, but that thread no longer exists!`)}else r===`checkMailbox`?Gt():r===`spawnThread`?_e(i):r===`cleanupThread`?Ut(()=>{Ee(Te[i.Qd])}):r===`loaded`?(e.loaded=!0,n(e)):i.target===`setimmediate`?e.postMessage(i):r===`uncaughtException`?e.onerror(i.error):r===`callHandler`?t[i.zd](...i.args):r&&x(`worker sent an unknown command ${r}`)},e.onerror=e=>{throw x(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var r,i=[];for(r of[])t.propertyIsEnumerable(r)&&i.push(r);e.postMessage({Uc:`load`,Ad:i,Vd:Ae,Wd:p})});function ke(){var e=new Worker((()=>{let e=URL;return import.meta.url>`file:`&&import.meta.url<`file;`?new e(`ort.bundle.min.mjs`,import.meta.url):new URL(import.meta.url)})(),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Se.push(e)}var Ae,je=(e,t)=>{ve=0,e=Mr(e,t),0<ve?m=e:xr(e)},Me=[],Ne=0;function Pe(e){var t=new ze(e>>>=0);return(w(),T)[t.Vc+12>>>0]==0&&(Le(t,!0),Ne--),Re(t,!1),Me.push(t),Ar(e)}var Fe=0,Ie=()=>{q(0,0);var e=Me.pop();Dr(e.ed),Fe=0};function Le(e,t){t=t?1:0,(w(),T)[e.Vc+12>>>0]=t}function Re(e,t){t=t?1:0,(w(),T)[e.Vc+13>>>0]=t}class ze{constructor(e){this.ed=e,this.Vc=e-24}}var Be=e=>{var t=Fe;if(!t)return wr(0),0;var n=new ze(t);(w(),A)[n.Vc+16>>>2>>>0]=t;var r=(w(),A)[n.Vc+4>>>2>>>0];if(!r)return wr(0),t;for(var i of e){if(i===0||i===r)break;if(kr(i,r,n.Vc+16))return wr(i),t}return wr(r),t};function Ve(){return Be([])}function He(e){return Be([e>>>0])}function Ue(e,t,n,r){return Be([e>>>0,t>>>0,n>>>0,r>>>0])}var We=()=>{var e=Me.pop();e||le(`no exception to throw`);var t=e.ed;throw(w(),T)[e.Vc+13>>>0]==0&&(Me.push(e),Re(e,!0),Le(e,!1),Ne++),Or(t),Fe=t};function Ge(e,t,n){var r=new ze(e>>>=0);throw t>>>=0,n>>>=0,(w(),A)[r.Vc+16>>>2>>>0]=0,(w(),A)[r.Vc+4>>>2>>>0]=t,(w(),A)[r.Vc+8>>>2>>>0]=n,Or(e),Ne++,Fe=e}var Ke=()=>Ne;function qe(e,t,n,r){return i?j(2,1,e,t,n,r):Je(e,t,n,r)}function Je(e,t,n,r){if(e>>>=0,t>>>=0,n>>>=0,r>>>=0,!globalThis.SharedArrayBuffer)return 6;var a=[];return i&&a.length===0?qe(e,t,n,r):(e={Od:n,Tc:e,dd:r,ud:a},i?(e.Uc=`spawnThread`,postMessage(e,a),0):_e(e))}function Ye(e){throw Fe||=e>>>0,Fe}var Xe=globalThis.TextDecoder&&new TextDecoder,Ze=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},Qe=(e,t=0,n,r)=>{if(16<(n=Ze(e,t>>>=0,n,r))-t&&e.buffer&&Xe)return Xe.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},M=(e,t,n)=>(e>>>=0)?Qe((w(),E),e,t,n):``;function $e(e,t,n){return i?j(3,1,e,t,n):0}function et(e,t){if(i)return j(4,1,e,t)}function tt(e,t){if(i)return j(5,1,e,t)}function nt(e,t,n){if(i)return j(6,1,e,t,n)}function rt(e,t,n){return i?j(7,1,e,t,n):0}function it(e,t){if(i)return j(8,1,e,t)}function at(e,t,n){if(i)return j(9,1,e,t,n)}function ot(e,t,n,r){if(i)return j(10,1,e,t,n,r)}function st(e,t,n,r){if(i)return j(11,1,e,t,n,r)}function ct(e,t,n,r){if(i)return j(12,1,e,t,n,r)}function lt(e){if(i)return j(13,1,e)}function ut(e,t){if(i)return j(14,1,e,t)}function dt(e,t,n){if(i)return j(15,1,e,t,n)}var ft=()=>le(``),N=e=>{e>>>=0;for(var t=``;;){var n=(w(),E)[e++>>>0];if(!n)return t;t+=String.fromCharCode(n)}},pt={},mt={},ht={},P=class extends Error{constructor(e){super(e),this.name=`BindingError`}};function gt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new P(`type "${r}" must have a positive integer typeid pointer`);if(mt.hasOwnProperty(e)){if(n.Bd)return;throw new P(`Cannot register type '${r}' twice`)}mt[e]=t,delete ht[e],pt.hasOwnProperty(e)&&(t=pt[e],delete pt[e],t.forEach(e=>e()))}(e,t,n)}var _t=(e,t,n)=>{switch(t){case 1:return n?e=>(w(),T)[e>>>0]:e=>(w(),E)[e>>>0];case 2:return n?e=>(w(),D)[e>>>1>>>0]:e=>(w(),O)[e>>>1>>>0];case 4:return n?e=>(w(),k)[e>>>2>>>0]:e=>(w(),A)[e>>>2>>>0];case 8:return n?e=>(w(),re)[e>>>3>>>0]:e=>(w(),ie)[e>>>3>>>0];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function vt(e,t,n,r,i){e>>>=0,n>>>=0,t=N(t>>>0);let a=e=>e;if(r=r===0n){let e=8*n;a=t=>BigInt.asUintN(e,t),i=a(i)}gt(e,{name:t,Qc:a,Xc:(e,t)=>(typeof t==`number`&&(t=BigInt(t)),t),Wc:_t(t,n,!r),Yc:null})}function yt(e,t,n,r){gt(e>>>=0,{name:t=N(t>>>0),Qc:function(e){return!!e},Xc:function(e,t){return t?n:r},Wc:function(e){return this.Qc((w(),E)[e>>>0])},Yc:null})}var bt=[],xt=[0,1,,1,null,1,!0,1,!1,1];function St(e){9<(e>>>=0)&&--xt[e+1]==0&&(xt[e]=void 0,bt.push(e))}var Ct=e=>{if(!e)throw new P(`Cannot use deleted val. handle = ${e}`);return xt[e]},wt=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=bt.pop()||xt.length;return xt[t]=e,xt[t+1]=1,t}};function Tt(e){return this.Qc((w(),A)[e>>>2>>>0])}var Et={name:`emscripten::val`,Qc:e=>{var t=Ct(e);return St(e),t},Xc:(e,t)=>wt(t),Wc:Tt,Yc:null};function Dt(e){return gt(e>>>0,Et)}var Ot=(e,t)=>{switch(t){case 4:return function(e){return this.Qc((w(),te)[e>>>2>>>0])};case 8:return function(e){return this.Qc((w(),ne)[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function kt(e,t,n){n>>>=0,gt(e>>>=0,{name:t=N(t>>>0),Qc:e=>e,Xc:(e,t)=>t,Wc:Ot(t,n),Yc:null})}function At(e,t,n,r,i){e>>>=0,n>>>=0,t=N(t>>>0);let a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o,i=a(i)}gt(e,{name:t,Qc:a,Xc:(e,t)=>t,Wc:_t(t,n,r!==0),Yc:null})}function jt(e,t,n){function r(e){var t=(w(),A)[e>>>2>>>0];return e=(w(),A)[e+4>>>2>>>0],new i((w(),T).buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];gt(e>>>=0,{name:n=N(n>>>0),Qc:r,Wc:r},{Bd:!0})}var Mt=(e,t,n)=>{var r=(w(),E);if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(t>=n)break;r[t++>>>0]=o}else if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6,r[t++>>>0]=128|63&o}else if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o,a++}}r[t>>>0]=0,e=t-i}else e=0;return e},Nt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t};function F(e,t){gt(e>>>=0,{name:t=N(t>>>0),Qc(e){var t=(w(),A)[e>>>2>>>0];return t=M(e+4,t,!0),hr(e),t},Xc(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1))throw new P(`Cannot pass non-string to std::string`);var r=n?Nt(t):t.length,i=gr(4+r+1),a=i+4;return(w(),A)[i>>>2>>>0]=r,n?Mt(t,a,r+1):(w(),E).set(t,a>>>0),e!==null&&e.push(hr,i),i},Wc:Tt,Yc(e){hr(e)}})}var Pt=globalThis.TextDecoder?new TextDecoder(`utf-16le`):void 0,Ft=(e,t,n)=>{if(e>>>=1,16<(t=Ze((w(),O),e,t/2,n))-e&&Pt)return Pt.decode((w(),O).slice(e,t));for(n=``;e<t;++e){var r=(w(),O)[e>>>0];n+=String.fromCharCode(r)}return n},It=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);(w(),D)[t>>>1>>>0]=a,t+=2}return(w(),D)[t>>>1>>>0]=0,t-r},Lt=e=>2*e.length,Rt=(e,t,n)=>{var r=``;e>>>=2;for(var i=0;!(i>=t/4);i++){var a=(w(),A)[e+i>>>0];if(!a&&!n)break;r+=String.fromCodePoint(a)}return r},zt=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.codePointAt(i);if(65535<a&&i++,(w(),k)[t>>>2>>>0]=a,(t+=4)+4>n)break}return(w(),k)[t>>>2>>>0]=0,t-r},Bt=e=>{for(var t=0,n=0;n<e.length;++n)65535<e.codePointAt(n)&&n++,t+=4;return t};function Vt(e,t,n){if(e>>>=0,t>>>=0,n=N(n>>>=0),t===2)var r=Ft,i=It,a=Lt;else r=Rt,i=zt,a=Bt;gt(e,{name:n,Qc:e=>{var n=(w(),A)[e>>>2>>>0];return n=r(e+4,n*t,!0),hr(e),n},Xc:(e,r)=>{if(typeof r!=`string`)throw new P(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=gr(4+o+t);return(w(),A)[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(hr,s),s},Wc:Tt,Yc(e){hr(e)}})}function I(e,t){gt(e>>>=0,{Cd:!0,name:t=N(t>>>0),Qc:()=>{},Xc:()=>{}})}function Ht(e){_r(e>>>0,!r,1,!n,131072,!1),De()}var Ut=e=>{if(!S)try{if(e(),!(0<ve))try{i?mr()&&xr(m):xe(m)}catch(e){e instanceof fe||e==`unwind`||l(0,e)}}catch(e){e instanceof fe||e==`unwind`||l(0,e)}},Wt=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function L(e){e>>>=0,Wt||(Atomics.waitAsync((w(),k),e>>>2,e).value.then(Gt),e+=128,Atomics.store((w(),k),e>>>2,1))}var Gt=()=>Ut(()=>{var e=mr();e&&(L(e),Cr())});function Kt(e,t){(e>>>=0)==t>>>0?setTimeout(Gt):i?postMessage({ad:e,Uc:`checkMailbox`}):(e=Te[e])&&e.postMessage({Uc:`checkMailbox`})}var qt=[];function Jt(e,t,n,r,i){for(t>>>=0,i>>>=0,qt.length=0,n=i>>>3,r=i+r>>>3;n<r;){var a=(w(),re)[n++>>>0]?(w(),re)[n++>>>0]:(w(),ne)[n++>>>0];qt.push(a)}return(t?bi[t]:yi[e])(...qt)}var R=()=>{ve=0};function Yt(e){e>>>=0,i?postMessage({Uc:`cleanupThread`,Qd:e}):Ee(Te[e])}function Xt(e){}var Zt=e=>{try{e()}catch(e){le(e)}};function Qt(e){var t=(...t)=>{nn.push(e);try{return e(...t)}finally{S||(nn.pop(),en&&$t===1&&nn.length===0&&($t=0,ve+=1,Zt(hi),typeof Fibers<`u`&&Fibers.ce()))}};return on.set(e,t),t}var $t=0,en=null,tn=0,nn=[],rn=new Map,an=new Map,on=new Map,sn=0,cn=null,ln=[],un=e=>function(e){if(!S){if($t===0){var t=!1,n=!1;e((e=0)=>{if(!S&&(tn=e,t=!0,n)){$t=2,Zt(()=>gi(en)),typeof MainLoop<`u`&&MainLoop.yd&&MainLoop.resume(),e=!1;try{var r=function(){var e=(w(),k)[en+8>>>2>>>0];return e=an.get(e),e=on.get(e),--ve,e()}()}catch(t){r=t,e=!0}var i=!1;if(!en){var a=cn;a&&(cn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||($t=1,en=function(){var e=gr(65548),t=e+12;if((w(),A)[e>>>2>>>0]=t,(w(),A)[e+4>>>2>>>0]=t+65536,t=nn[0],!rn.has(t)){var n=sn++;rn.set(t,n),an.set(n,t)}return t=rn.get(t),(w(),k)[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.yd&&MainLoop.pause(),Zt(()=>mi(en)))}else $t===2?($t=0,Zt(_i),hr(en),en=null,ln.forEach(Ut)):le(`invalid state: ${$t}`);return tn}}(t=>{e().then(t)});function dn(e){return e>>>=0,un(async()=>wt(await Ct(e)))}var fn=[],pn=e=>{var t=fn.length;return fn.push(e),t},mn=(e,t)=>{for(var n=Array(e),r=0;r<e;++r){var i=r,a=(w(),A)[t+4*r>>>2>>>0],o=mt[a];if(o===void 0)throw e=`parameter ${r}`,a=fr(a),t=N(a),hr(a),new P(`${e} has unknown type ${t}`);n[i]=o}return n},hn=(e,t,n)=>{var r=[];return e=e(r,n),r.length&&((w(),A)[t>>>2>>>0]=wt(r)),e},gn={},_n=e=>{var t=gn[e];return t===void 0?N(e):t};function vn(e,t,n){var[r,...i]=mn(e,t>>>0);t=r.Xc.bind(r);var a=i.map(e=>e.Wc.bind(e));e--;var o={toValue:Ct};switch(e=a.map((e,t)=>{var n=`argFromPtr${t}`;return o[n]=e,`${n}(args${t?`+`+8*t:``})`}),n){case 0:var s=`toValue(handle)`;break;case 2:s=`new (toValue(handle))`;break;case 3:s=``;break;case 1:o.getStringOrSymbol=_n,s=`toValue(handle)[getStringOrSymbol(methodName)]`}return s+=`(${e})`,r.Cd||(o.toReturnWire=t,o.emval_returnValue=hn,s=`return emval_returnValue(toReturnWire, destructorsRef, ${s})`),s=`return function (handle, methodName, destructorsRef, args) {
  ${s}
  }`,n=Function(Object.keys(o),s)(...Object.values(o)),s=`methodCaller<(${i.map(e=>e.name)}) => ${r.name}>`,pn(Object.defineProperty(n,`name`,{value:s}))}function yn(e,t){return t>>>=0,(e=Ct(e>>>0))==Ct(t)}function bn(e){return(e>>>=0)?(e=_n(e),wt(globalThis[e])):wt(globalThis)}function xn(e){return e=_n(e>>>0),wt(t[e])}function Sn(e,t){return t>>>=0,e=Ct(e>>>0),t=Ct(t),wt(e[t])}function Cn(e){9<(e>>>=0)&&(xt[e+1]+=1)}function wn(e,t,n,r,i){return fn[e>>>0](t>>>0,n>>>0,r>>>0,i>>>0)}function Tn(e,t,n,r,i){return wn(e>>>0,t>>>0,n>>>0,r>>>0,i>>>0)}function z(){return wt([])}function B(e){e=Ct(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return wt(t)}function En(e){return wt(_n(e>>>0))}function Dn(){return wt({})}function On(e){for(var t=Ct(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}St(e)}function kn(e,t,n){t>>>=0,n>>>=0,e=Ct(e>>>0),t=Ct(t),n=Ct(n),e[t]=n}function V(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),k)[t>>>2>>>0]=e.getUTCSeconds(),(w(),k)[t+4>>>2>>>0]=e.getUTCMinutes(),(w(),k)[t+8>>>2>>>0]=e.getUTCHours(),(w(),k)[t+12>>>2>>>0]=e.getUTCDate(),(w(),k)[t+16>>>2>>>0]=e.getUTCMonth(),(w(),k)[t+20>>>2>>>0]=e.getUTCFullYear()-1900,(w(),k)[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),k)[t+28>>>2>>>0]=e}var H=e=>e%4==0&&(e%100!=0||e%400==0),An=[0,31,60,91,121,152,182,213,244,274,305,335],jn=[0,31,59,90,120,151,181,212,243,273,304,334];function Mn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),k)[t>>>2>>>0]=e.getSeconds(),(w(),k)[t+4>>>2>>>0]=e.getMinutes(),(w(),k)[t+8>>>2>>>0]=e.getHours(),(w(),k)[t+12>>>2>>>0]=e.getDate(),(w(),k)[t+16>>>2>>>0]=e.getMonth(),(w(),k)[t+20>>>2>>>0]=e.getFullYear()-1900,(w(),k)[t+24>>>2>>>0]=e.getDay();var n=(H(e.getFullYear())?An:jn)[e.getMonth()]+e.getDate()-1|0;(w(),k)[t+28>>>2>>>0]=n,(w(),k)[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),(w(),k)[t+32>>>2>>>0]=e}function U(e){e>>>=0;var t=new Date((w(),k)[e+20>>>2>>>0]+1900,(w(),k)[e+16>>>2>>>0],(w(),k)[e+12>>>2>>>0],(w(),k)[e+8>>>2>>>0],(w(),k)[e+4>>>2>>>0],(w(),k)[e>>>2>>>0],0),n=(w(),k)[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?(w(),k)[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),(w(),k)[e+24>>>2>>>0]=t.getDay(),n=(H(t.getFullYear())?An:jn)[t.getMonth()]+t.getDate()-1|0,(w(),k)[e+28>>>2>>>0]=n,(w(),k)[e>>>2>>>0]=t.getSeconds(),(w(),k)[e+4>>>2>>>0]=t.getMinutes(),(w(),k)[e+8>>>2>>>0]=t.getHours(),(w(),k)[e+12>>>2>>>0]=t.getDate(),(w(),k)[e+16>>>2>>>0]=t.getMonth(),(w(),k)[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function Nn(e,t,n,r,a,o,s){return i?j(16,1,e,t,n,r,a,o,s):-52}function W(e,t,n,r,a,o){if(i)return j(17,1,e,t,n,r,a,o)}var G={},Pn=()=>performance.timeOrigin+performance.now();function Fn(e,t){return i?j(18,1,e,t):(G[e]&&(clearTimeout(G[e].id),delete G[e]),t&&(G[e]={id:setTimeout(()=>{delete G[e],Ut(()=>Sr(e,performance.timeOrigin+performance.now()))},t),be:t}),0)}function In(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);(w(),A)[e>>>2>>>0]=60*o,(w(),k)[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(Mt(e,n,17),Mt(t,r,17)):(Mt(e,r,17),Mt(t,n,17))}var Ln=()=>Date.now(),K=1;function Rn(e,t,n){if(n>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!K)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(w(),re)[n>>>3>>>0]=BigInt(e),0}var zn=[],Bn=(e,t)=>{zn.length=0;for(var n;n=(w(),E)[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,zn.push(n==112?(w(),A)[t>>>2>>>0]:n==106?(w(),re)[t>>>3>>>0]:n==105?(w(),k)[t>>>2>>>0]:(w(),ne)[t>>>3>>>0]),t+=r?8:4}return zn};function Vn(e,t,n){return e>>>=0,t=Bn(t>>>0,n>>>0),bi[e](...t)}function Hn(e,t,n){return e>>>=0,t=Bn(t>>>0,n>>>0),bi[e](...t)}var Un=()=>{};function Wn(e,t){return x(M(e>>>0,t>>>0))}var Gn=()=>{throw ve+=1,`unwind`};function Kn(){return 4294901760}var qn=()=>navigator.hardwareConcurrency,Jn={},Yn=e=>{var t;return(t=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(e))?+t[1]:(t=/:(\d+):\d+(?:\)|$)/.exec(e))?2147483648|t[1]:0},Xn=e=>{for(var t of e)(e=Yn(t))&&(Jn[e]=t)};function Zn(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),Xn(e),Jn.sd=Yn(e[3]),Jn.Md=e,Jn.sd}function Qn(e){if(!(e=Jn[e>>>0]))return 0;var t;if(t=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(e))e=t[1];else if(t=/^\s+at (.*) \(.*\)$/.exec(e))e=t[1];else{if(!(t=/^(.+?)@/.exec(e)))return 0;e=t[1]}hr(Qn.td??0),t=Nt(e)+1;var n=gr(t);return n&&Mt(e,n,t),Qn.td=n,Qn.td}function $n(e){e>>>=0;var t=(w(),E).length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-Ae.buffer.byteLength+65535)/65536|0;try{Ae.grow(r),se();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}function er(e,t,n){if(e>>>=0,t>>>=0,Jn.sd==e)var r=Jn.Md;else (r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),Xn(r);for(var i=3;r[i]&&Yn(r[i])!=e;)++i;for(e=0;e<n&&r[e+i];++e)(w(),k)[t+4*e>>>2>>>0]=Yn(r[e+i]);return e}var tr,nr={},rr=()=>{if(!tr){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in nr)nr[e]===void 0?delete t[e]:t[e]=nr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);tr=n}return tr};function ir(e,t){if(i)return j(19,1,e,t);e>>>=0,t>>>=0;var n,r=0,a=0;for(n of rr()){var o=t+r;(w(),A)[e+a>>>2>>>0]=o,r+=Mt(n,o,1/0)+1,a+=4}return 0}function ar(e,t){if(i)return j(20,1,e,t);e>>>=0,t>>>=0;var n=rr();for(var r of((w(),A)[e>>>2>>>0]=n.length,e=0,n))e+=Nt(r)+1;return(w(),A)[t>>>2>>>0]=e,0}function or(e){return i?j(21,1,e):52}function sr(e,t,n,r){return i?j(22,1,e,t,n,r):52}function cr(e,t,n,r){return i?j(23,1,e,t,n,r):70}var lr=[null,[],[]];function ur(e,t,n,r){if(i)return j(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var a=0,o=0;o<n;o++){var s=(w(),A)[t>>>2>>>0],c=(w(),A)[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=e,d=(w(),E)[s+l>>>0],f=lr[u];d===0||d===10?((u===1?b:x)(Qe(f)),f.length=0):f.push(d)}a+=c}return(w(),A)[r>>>2>>>0]=a,0}function dr(e){return e>>>0}i||function(){for(var e=t.numThreads-1;e--;)ke();me.push(async()=>{var e=async function(){if(!i)return Promise.all(Se.map(Oe))}();he++,await e,--he==0&&ge&&(e=ge,ge=null,e())})}(),i||(Ae=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),se()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>Y(),t.stackRestore=e=>J(e),t.stackAlloc=e=>Er(e),t.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:(w(),T)[e>>>0]=t;break;case`i16`:(w(),D)[e>>>1>>>0]=t;break;case`i32`:(w(),k)[e>>>2>>>0]=t;break;case`i64`:(w(),re)[e>>>3>>>0]=BigInt(t);break;case`float`:(w(),te)[e>>>2>>>0]=t;break;case`double`:(w(),ne)[e>>>3>>>0]=t;break;case`*`:(w(),A)[e>>>2>>>0]=t;break;default:le(`invalid type for setValue: ${n}`)}},t.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return(w(),T)[e>>>0];case`i16`:return(w(),D)[e>>>1>>>0];case`i32`:return(w(),k)[e>>>2>>>0];case`i64`:return(w(),re)[e>>>3>>>0];case`float`:return(w(),te)[e>>>2>>>0];case`double`:return(w(),ne)[e>>>3>>>0];case`*`:return(w(),A)[e>>>2>>>0];default:le(`invalid type for getValue: ${t}`)}},t.UTF8ToString=M,t.stringToUTF8=Mt,t.lengthBytesUTF8=Nt;var fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,q,wr,Tr,J,Er,Y,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,X,ui,di,fi,pi,mi,hi,gi,_i,vi,yi=[ye,be,qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,Nn,W,Fn,ir,ar,or,sr,cr,ur],bi={929356:(e,n,r,i,a)=>{if(t===void 0||!t.Zc)return 1;if((e=M(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=t.Zc.get(e)))return 2;if(n=Number(n>>>0),r=Number(r>>>0),i=Number(i>>>0),n+r>e.byteLength)return 3;try{let o=e.subarray(n,n+r);switch(a){case 0:(w(),E).set(o,i>>>0);break;case 1:t.Xd?t.Xd(i,o):t.Ld(i,o);break;default:return 4}return 0}catch{return 4}},930180:(e,n,r)=>{t.xd(e,(w(),E).subarray(n>>>0,n+r>>>0))},930244:()=>t.Zd(),930286:e=>{t.vd(e)},930323:()=>{t.Ed()},930354:()=>{t.Fd()},930383:()=>{t.Jd()},930408:e=>t.Dd(e),930441:e=>t.Hd(e),930473:(e,n,r)=>{t.jd(Number(e),Number(n),Number(r),!0)},930536:(e,n,r)=>{t.jd(Number(e),Number(n),Number(r))},930593:()=>typeof wasmOffsetConverter<`u`,930650:e=>{t.ac(`Abs`,e,void 0)},930701:e=>{t.ac(`Neg`,e,void 0)},930752:e=>{t.ac(`Floor`,e,void 0)},930805:e=>{t.ac(`Ceil`,e,void 0)},930857:e=>{t.ac(`Reciprocal`,e,void 0)},930915:e=>{t.ac(`Sqrt`,e,void 0)},930967:e=>{t.ac(`Exp`,e,void 0)},931018:e=>{t.ac(`Erf`,e,void 0)},931069:e=>{t.ac(`Sigmoid`,e,void 0)},931124:(e,n,r)=>{t.ac(`HardSigmoid`,e,{alpha:n,beta:r})},931203:e=>{t.ac(`Log`,e,void 0)},931254:e=>{t.ac(`Sin`,e,void 0)},931305:e=>{t.ac(`Cos`,e,void 0)},931356:e=>{t.ac(`Tan`,e,void 0)},931407:e=>{t.ac(`Asin`,e,void 0)},931459:e=>{t.ac(`Acos`,e,void 0)},931511:e=>{t.ac(`Atan`,e,void 0)},931563:e=>{t.ac(`Sinh`,e,void 0)},931615:e=>{t.ac(`Cosh`,e,void 0)},931667:e=>{t.ac(`Asinh`,e,void 0)},931720:e=>{t.ac(`Acosh`,e,void 0)},931773:e=>{t.ac(`Atanh`,e,void 0)},931826:e=>{t.ac(`Tanh`,e,void 0)},931878:e=>{t.ac(`Not`,e,void 0)},931929:(e,n,r)=>{t.ac(`Clip`,e,{min:n,max:r})},931998:e=>{t.ac(`Clip`,e,void 0)},932050:(e,n)=>{t.ac(`Elu`,e,{alpha:n})},932108:e=>{t.ac(`Gelu`,e,void 0)},932160:e=>{t.ac(`Relu`,e,void 0)},932212:(e,n)=>{t.ac(`LeakyRelu`,e,{alpha:n})},932276:(e,n)=>{t.ac(`ThresholdedRelu`,e,{alpha:n})},932346:(e,n)=>{t.ac(`Cast`,e,{to:n})},932404:e=>{t.ac(`Add`,e,void 0)},932455:e=>{t.ac(`Sub`,e,void 0)},932506:e=>{t.ac(`Mul`,e,void 0)},932557:e=>{t.ac(`Div`,e,void 0)},932608:e=>{t.ac(`Pow`,e,void 0)},932659:e=>{t.ac(`Equal`,e,void 0)},932712:e=>{t.ac(`Greater`,e,void 0)},932767:e=>{t.ac(`GreaterOrEqual`,e,void 0)},932829:e=>{t.ac(`Less`,e,void 0)},932881:e=>{t.ac(`LessOrEqual`,e,void 0)},932940:(e,n,r,i,a)=>{t.ac(`ReduceMean`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},933115:(e,n,r,i,a)=>{t.ac(`ReduceMax`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},933289:(e,n,r,i,a)=>{t.ac(`ReduceMin`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},933463:(e,n,r,i,a)=>{t.ac(`ReduceProd`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},933638:(e,n,r,i,a)=>{t.ac(`ReduceSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},933812:(e,n,r,i,a)=>{t.ac(`ReduceL1`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},933985:(e,n,r,i,a)=>{t.ac(`ReduceL2`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},934158:(e,n,r,i,a)=>{t.ac(`ReduceLogSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},934335:(e,n,r,i,a)=>{t.ac(`ReduceSumSquare`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},934515:(e,n,r,i,a)=>{t.ac(`ReduceLogSumExp`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},934695:e=>{t.ac(`Where`,e,void 0)},934748:(e,n,r)=>{t.ac(`Transpose`,e,{perm:n?Array.from((w(),k).subarray(Number(n)>>>0,Number(r)>>>0)):[]})},934872:(e,n,r,i)=>{t.ac(`DepthToSpace`,e,{blocksize:n,mode:M(r),format:i?`NHWC`:`NCHW`})},935005:(e,n,r,i)=>{t.ac(`DepthToSpace`,e,{blocksize:n,mode:M(r),format:i?`NHWC`:`NCHW`})},935138:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.ac(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),T)[u>>>0],outputPadding:d?Array.from((w(),k).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),k).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:M(h)})},935571:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ac(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),k).subarray(Number(r)>>>0,2+(Number(r)>>>0)>>>0)),group:i,kernelShape:Array.from((w(),k).subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from((w(),k).subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from((w(),k).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!(w(),T)[l>>>0],outputPadding:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:M(m)})},936232:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.ac(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),T)[u>>>0],outputPadding:d?Array.from((w(),k).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),k).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:M(h)})},936665:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ac(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),k).subarray(Number(r)>>>0,2+(Number(r)>>>0)>>>0)),group:i,kernelShape:Array.from((w(),k).subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from((w(),k).subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from((w(),k).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!(w(),T)[l>>>0],outputPadding:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:M(m)})},937326:(e,n)=>{t.ac(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},937417:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ac(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},937896:(e,n)=>{t.ac(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},937987:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ac(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},938466:(e,n)=>{t.ac(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},938553:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ac(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},939028:(e,n)=>{t.ac(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},939115:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.ac(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},939590:(e,n,r,i,a)=>{t.ac(`Gemm`,e,{alpha:n,beta:r,transA:i,transB:a})},939694:e=>{t.ac(`MatMul`,e,void 0)},939748:(e,n,r,i)=>{t.ac(`ArgMax`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},939856:(e,n,r,i)=>{t.ac(`ArgMin`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},939964:(e,n)=>{t.ac(`Softmax`,e,{axis:n})},940027:(e,n)=>{t.ac(`Concat`,e,{axis:n})},940087:(e,n,r,i,a)=>{t.ac(`Split`,e,{axis:n,numOutputs:r,splitSizes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},940243:e=>{t.ac(`Expand`,e,void 0)},940297:(e,n)=>{t.ac(`Gather`,e,{axis:Number(n)})},940368:(e,n)=>{t.ac(`GatherElements`,e,{axis:Number(n)})},940447:(e,n)=>{t.ac(`GatherND`,e,{batch_dims:Number(n)})},940526:(e,n,r,i,a,o,s,c,l,u,d)=>{t.ac(`Resize`,e,{antialias:n,axes:r?Array.from((w(),k).subarray(Number(r)>>>0,Number(i)>>>0)):[],coordinateTransformMode:M(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:M(l),mode:M(u),nearestMode:M(d)})},940888:(e,n,r,i,a,o,s)=>{t.ac(`Slice`,e,{starts:n?Array.from((w(),k).subarray(Number(n)>>>0,Number(r)>>>0)):[],ends:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[]})},941152:e=>{t.ac(`Tile`,e,void 0)},941204:(e,n,r)=>{t.ac(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},941318:(e,n,r)=>{t.ac(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},941432:e=>{t.ac(`Range`,e,void 0)},941485:(e,n)=>{t.ac(`Einsum`,e,{equation:M(n)})},941566:(e,n,r,i,a)=>{t.ac(`Pad`,e,{mode:n,value:r,pads:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},941709:(e,n,r,i,a,o)=>{t.ac(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},941878:(e,n,r,i,a,o)=>{t.ac(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},942047:(e,n,r)=>{t.ac(`CumSum`,e,{exclusive:Number(n),reverse:Number(r)})},942144:(e,n,r)=>{t.ac(`DequantizeLinear`,e,{axis:n,blockSize:r})},942234:(e,n,r,i,a)=>{t.ac(`GridSample`,e,{align_corners:n,mode:M(r),padding_mode:M(i),format:a?`NHWC`:`NCHW`})},942404:(e,n,r,i,a)=>{t.ac(`GridSample`,e,{align_corners:n,mode:M(r),padding_mode:M(i),format:a?`NHWC`:`NCHW`})},942574:(e,n)=>{t.ac(`ScatterND`,e,{reduction:M(n)})},942659:(e,n,r,i,a,o,s,c,l)=>{t.ac(`Attention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from((w(),k).subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},942931:e=>{t.ac(`BiasAdd`,e,void 0)},942986:e=>{t.ac(`BiasSplitGelu`,e,void 0)},943047:e=>{t.ac(`FastGelu`,e,void 0)},943103:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{t.ac(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:n,dilations:r?Array.from((w(),k).subarray(Number(r)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!(w(),T)[Number(p)>>>0],activation:M(m),activation_params:h?Array.from((w(),te).subarray(Number(h)>>>0,Number(g)>>>0)):[]})},943687:e=>{t.ac(`Gelu`,e,void 0)},943739:(e,n,r,i,a,o,s,c,l)=>{t.ac(`GroupQueryAttention`,e,{numHeads:n,kvNumHeads:r,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},943956:(e,n,r,i)=>{t.ac(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},944067:(e,n,r,i)=>{t.ac(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},944178:(e,n,r,i,a,o)=>{t.ac(`MatMulNBits`,e,{k:n,n:r,accuracyLevel:i,bits:a,blockSize:o})},944305:(e,n,r,i,a,o)=>{t.ac(`MultiHeadAttention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o})},944464:(e,n)=>{t.ac(`QuickGelu`,e,{alpha:n})},944528:(e,n,r,i,a)=>{t.ac(`RotaryEmbedding`,e,{interleaved:!!n,numHeads:r,rotaryEmbeddingDim:i,scale:a})},944667:(e,n,r)=>{t.ac(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},944769:(e,n,r)=>{t.ac(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},944871:(e,n,r,i)=>{t.ac(`GatherBlockQuantized`,e,{gatherAxis:n,quantizeAxis:r,blockSize:i})},944992:e=>{t.Id(e)},945026:(e,n)=>t.Kd(Number(e),Number(n),t.$c.Nd,t.$c.errors)};function xi(e,n,r){return un(async()=>{await t.Gd(Number(e),Number(n),Number(r))})}function Si(){return typeof wasmOffsetConverter<`u`}function Ci(e,t,n,r){var i=Y();try{return Br(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function wi(e,t,n){var r=Y();try{return Ir(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function Ti(e,t,n){var r=Y();try{jr(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function Ei(e,t){var n=Y();try{return Mr(e,t)}catch(e){if(J(n),e!==e+0)throw e;q(1,0)}}function Di(e){var t=Y();try{Nr(e)}catch(e){if(J(t),e!==e+0)throw e;q(1,0)}}function Oi(e,t,n,r,i,a,o){var s=Y();try{return Rr(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function ki(e,t){var n=Y();try{Vr(e,t)}catch(e){if(J(n),e!==e+0)throw e;q(1,0)}}function Ai(e,t,n,r,i,a){var o=Y();try{Pr(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function ji(e,t,n,r){var i=Y();try{zr(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function Mi(e,t,n,r,i){var a=Y();try{Fr(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function Ni(e,t,n,r,i,a,o){var s=Y();try{Ur(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function Pi(e,t,n,r,i,a,o){var s=Y();try{Wr(e,t,n,r,i,a,o)}catch(e){if(J(s),e!==e+0)throw e;q(1,0)}}function Fi(e,t,n,r,i,a,o,s){var c=Y();try{Jr(e,t,n,r,i,a,o,s)}catch(e){if(J(c),e!==e+0)throw e;q(1,0)}}function Ii(e,t,n,r,i){var a=Y();try{return Hr(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function Li(e,t,n,r,i,a,o,s){var c=Y();try{Yr(e,t,n,r,i,a,o,s)}catch(e){if(J(c),e!==e+0)throw e;q(1,0)}}function Ri(e,t,n,r,i,a,o,s,c,l,u,d){var f=Y();try{Gr(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(J(f),e!==e+0)throw e;q(1,0)}}function zi(e,t,n,r,i,a){var o=Y();try{return Kr(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function Bi(e,t,n){var r=Y();try{return Xr(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;return q(1,0),0n}}function Vi(e,t,n,r,i,a,o,s,c){var l=Y();try{Lr(e,t,n,r,i,a,o,s,c)}catch(e){if(J(l),e!==e+0)throw e;q(1,0)}}function Hi(e){var t=Y();try{return Zr(e)}catch(e){if(J(t),e!==e+0)throw e;q(1,0)}}function Ui(e,t,n){var r=Y();try{return Qr(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function Wi(e,t){var n=Y();try{return pi(e,t)}catch(e){if(J(n),e!==e+0)throw e;return q(1,0),0n}}function Gi(e,t,n,r,i){var a=Y();try{$r(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function Ki(e){var t=Y();try{return ei(e)}catch(e){if(J(t),e!==e+0)throw e;return q(1,0),0n}}function qi(e,t,n,r,i,a){var o=Y();try{return oi(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function Ji(e,t,n,r,i,a){var o=Y();try{return si(e,t,n,r,i,a)}catch(e){if(J(o),e!==e+0)throw e;q(1,0)}}function Yi(e,t,n,r,i,a,o,s){var c=Y();try{return qr(e,t,n,r,i,a,o,s)}catch(e){if(J(c),e!==e+0)throw e;q(1,0)}}function Xi(e,t,n,r,i){var a=Y();try{return ci(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;return q(1,0),0n}}function Zi(e,t,n,r){var i=Y();try{return li(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function Qi(e,t,n,r){var i=Y();try{return X(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function $i(e,t,n,r,i,a,o,s,c,l,u,d){var f=Y();try{return ui(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(J(f),e!==e+0)throw e;q(1,0)}}function ea(e,t,n,r,i,a,o,s,c,l,u){var d=Y();try{ii(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(J(d),e!==e+0)throw e;q(1,0)}}function ta(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Y();try{ai(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if(J(g),e!==e+0)throw e;q(1,0)}}function na(e,t,n,r){var i=Y();try{return di(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function ra(e,t,n,r,i){var a=Y();try{return fi(e,t,n,r,i)}catch(e){if(J(a),e!==e+0)throw e;q(1,0)}}function ia(e,t,n){var r=Y();try{return ti(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function aa(e,t,n){var r=Y();try{return ni(e,t,n)}catch(e){if(J(r),e!==e+0)throw e;q(1,0)}}function oa(e,t,n,r){var i=Y();try{ri(e,t,n,r)}catch(e){if(J(i),e!==e+0)throw e;q(1,0)}}function sa(){if(0<he)ge=sa;else if(i)h?.(t),ce();else{for(var e=me;0<e.length;)e.shift()(t);0<he?ge=sa:(t.calledRun=!0,S||(ce(),h?.(t)))}}return i||(vi=await de(),sa()),t.PTR_SIZE=4,oe?t:new Promise((e,t)=>{h=e,g=t})}var He,Ue,We=u(()=>{He=Ve,Ue=globalThis.self?.name?.startsWith(`em-pthread`),Ue&&Ve()}),Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,M,$e,et,tt,nt,rt,it=u(()=>{Pe(),Ge=typeof location>`u`?void 0:location.origin,Ke=import.meta.url>`file:`&&import.meta.url<`file;`,qe=()=>Ke?new URL(new URL(`ort.bundle.min.mjs`,import.meta.url).href,Ge).href:import.meta.url,Je=qe(),Ye=()=>{if(Je&&!Je.startsWith(`blob:`))return Je.substring(0,Je.lastIndexOf(`/`)+1)},Xe=(e,t)=>{try{let n=t??Je;return(n?new URL(e,n):new URL(e)).origin===Ge}catch{return!1}},Ze=(e,t)=>{let n=t??Je;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Qe=(e,t)=>`${t??`./`}${e}`,M=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},$e=async e=>(await i(async()=>{let{default:t}=await import(e);return{default:t}},[])).default,et=(ze(),p(Fe)).default,tt=async()=>{if(!Je)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(Xe(Je))return[void 0,et()];let e=await M(Je);return[e,et(e)]},nt=(We(),p(Be)).default,rt=async(e,t,n,r)=>{let i=nt&&!(e||t);if(i)if(Je)i=Xe(Je)||r&&!n;else if(r&&!n)i=!0;else throw Error(`cannot determine the script source URL.`);if(i)return[void 0,nt];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??Ze(r,t),a=n&&i&&!Xe(i,t),o=a?await M(i):i??Qe(r,t);return[a?o:void 0,await $e(o)]}}}),at,ot,st,ct,lt,ut,dt,ft,N,pt=u(()=>{it(),ot=!1,st=!1,ct=!1,lt=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ut=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},dt=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ft=async e=>{if(ot)return Promise.resolve();if(st)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(ct)throw Error(`previous call to 'initializeWebAssembly()' failed.`);st=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd===`relaxed`){if(!dt())throw Error(`Relaxed WebAssembly SIMD is not supported in the current environment.`)}else if(!ut())throw Error(`WebAssembly SIMD is not supported in the current environment.`)}let r=lt();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await rt(s,a,n>1,!!u||!!l),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u,r.locateFile=e=>e;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=Ye();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{st=!1,ot=!0,at=t,e(),d&&URL.revokeObjectURL(d)},e=>{st=!1,ct=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},N=()=>{if(ot&&at)return at;throw Error(`WebAssembly is not initialized yet.`)}}),mt,ht,P,gt=u(()=>{pt(),mt=(e,t)=>{let n=N(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},ht=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)ht(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},P=e=>{let t=N(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),_t,vt=u(()=>{pt(),gt(),_t=e=>{let t=N(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=mt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&P(`Can't create run options.`),e?.extra!==void 0&&ht(e.extra,``,new WeakSet,(e,i)=>{let a=mt(e,r),o=mt(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&P(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),yt,bt,xt,St,Ct,wt,Tt=u(()=>{pt(),gt(),yt=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`layout`:return 3;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},bt=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},xt=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},St=(e,t,n,r)=>{let i=mt(t,r),a=mt(n,r);N()._OrtAddSessionConfigEntry(e,i,a)!==0&&P(`Can't set a session config entry: ${t} - ${n}.`)},Ct=async(e,t,n)=>{let r=t.executionProviders;for(let t of r){let r=typeof t==`string`?t:t.name,i=[];switch(r){case`webnn`:if(r=`WEBNN`,typeof t!=`string`){let r=t?.deviceType;r&&St(e,`deviceType`,r,n)}break;case`webgpu`:if(r=`JS`,typeof t!=`string`){let r=t;if(r?.preferredLayout){if(r.preferredLayout!==`NCHW`&&r.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${r.preferredLayout}`);St(e,`preferredLayout`,r.preferredLayout,n)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${r}`)}let a=mt(r,n),o=i.length,s=0,c=0;if(o>0){s=N()._malloc(o*N().PTR_SIZE),n.push(s),c=N()._malloc(o*N().PTR_SIZE),n.push(c);for(let e=0;e<o;e++)N().setValue(s+e*N().PTR_SIZE,i[e][0],`*`),N().setValue(c+e*N().PTR_SIZE,i[e][1],`*`)}await N()._OrtAppendExecutionProvider(e,a,s,c,o)!==0&&P(`Can't append execution provider: ${r}.`)}},wt=async e=>{let t=N(),n=0,r=[],i=e||{};xt(i);try{let e=yt(i.graphOptimizationLevel??`all`),a=bt(i.executionMode??`sequential`),o=typeof i.logId==`string`?mt(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log severity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?mt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&P(`Can't create session options.`),i.executionProviders&&await Ct(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);St(n,`enableGraphCapture`,i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=mt(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&P(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&ht(i.extra,``,new WeakSet,(e,t)=>{St(n,e,t,r)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&P(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),Et,Dt,Ot,kt,At,jt,Mt,Nt,F=u(()=>{Et=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Dt=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Ot=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},kt=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},At=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},jt=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Mt=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Nt=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Pt,Ft=u(()=>{Pe(),Pt=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),It,Lt,Rt,zt,Bt,Vt,I,Ht=u(()=>{F(),It=[`V`,`I`,`W`,`E`,`F`],Lt=(e,t)=>{console.log(`[${It[e]},${new Date().toISOString()}]${t}`)},Bt=(e,t)=>{Rt=e,zt=t},Vt=(e,t)=>{let n=At(e);n>=At(Rt)&&Lt(n,typeof t==`function`?t():t)},I=(...e)=>{zt&&Vt(...e)}}),Ut,Wt,L,Gt,Kt,qt,Jt,R=u(()=>{Ut=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},Wt=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=Ut.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},L=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length?e.every((e,n)=>e===t[n]):!1}},Gt=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},Kt=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!Wt.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},qt=-34028234663852886e22,Jt=34028234663852886e22}),Yt,Xt=u(()=>{F(),Yt=(e,t)=>new(kt(t))(e)}),Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln=u(()=>{F(),Ht(),Zt=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),Qt=(e,t)=>{if(t===`int32`)return e;let n=Zt.get(t);if(!n)throw Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(kt(t))(e.buffer,e.byteOffset,i);switch(t){case`int64`:case`uint64`:{let e=new Int32Array(i);for(let t=0;t<i;t++){let n=a[t];if(n>2147483647n||n<-2147483648n)throw Error(`Can not convert int64 data to int32 - value out of range.`);e[t]=Number(n)}return new Uint8Array(e.buffer)}case`int8`:case`uint8`:case`uint32`:{if(t===`uint32`&&a.some(e=>e>2147483647))throw Error(`Can not convert uint32 data to int32 - value out of range.`);let e=Int32Array.from(a,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from ${t} to 'int32'`)}},$t=(e,t)=>{if(t===`int32`)return e;if(e.byteLength%4!=0)throw Error(`Invalid Uint8Array length - must be a multiple of 4 (int32).`);let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case`int64`:{let e=BigInt64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`uint64`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uin64 - negative value found.`);let e=BigUint64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`int8`:{if(r.some(e=>e<-128||e>127))throw Error(`Can not convert int32 data to int8 - value out of range.`);let e=Int8Array.from(r,Number);return new Uint8Array(e.buffer)}case`uint8`:if(r.some(e=>e<0||e>255))throw Error(`Can not convert int32 data to uint8 - value out of range.`);return Uint8Array.from(r,Number);case`uint32`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uint32 - negative value found.`);let e=Uint32Array.from(r,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from 'int32' to ${t}`)}},en=1,tn=()=>en++,nn=new Map([[`int8`,`int32`],[`uint8`,`int32`],[`uint32`,`int32`],[`int64`,`int32`]]),rn=(e,t)=>{let n=Zt.get(e);if(!n)throw Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},an=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return rn(this.dataType,this.tensorShape)}destroy(){I(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=$t(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return n.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}setIsDataConverted(e){this.isDataConverted=e}},on=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!a?.input.dataTypes.includes(t)){if(o=nn.get(t),!o||a?.input.dataTypes.includes(o))throw Error(`WebNN backend does not support data type: ${t}`);I(`verbose`,()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==rn(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType===`int32`)t=Qt(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else I(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?$t(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},sn=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=tn();return this.tensorTrackersById.set(e,new on(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){I(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){I(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=tn(),o=new an({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new on(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(s,t,n)){I(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}I(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}}`);let c=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new an({sessionId:e,context:s,tensor:c,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},cn=(...e)=>new sn(...e)}),un,dn,fn,pn=u(()=>{F(),pt(),Xt(),ln(),Ht(),un=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),dn=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},fn=class{constructor(e){this.tensorManager=cn(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Bt(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){I(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){I(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)I(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}else if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>dn(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){I(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=un.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){I(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=un.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!N().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);I(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Yt(n,t)}}registerMLTensor(e,t,n,r){let i=un.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return I(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw Error(`External mounted files are not available.`);let s=e;e.startsWith(`./`)&&(s=e.substring(2));let c=a.get(s);if(!c)throw Error(`File with name ${s} not found in preloaded files.`);if(t+n>c.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let l=c.slice(t,t+n).buffer,u;switch(i.dataType){case`float32`:u=new Float32Array(l);break;case`float16`:u=typeof Float16Array<`u`&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case`int32`:u=new Int32Array(l);break;case`uint32`:u=new Uint32Array(l);break;case`int64`:if(o){let e=Qt(new Uint8Array(l),`int64`);u=new Int32Array(e.buffer),i.dataType=`int32`}else u=new BigInt64Array(l);break;case`uint64`:u=new BigUint64Array(l);break;case`int8`:u=new Int8Array(l);break;case`int4`:case`uint4`:case`uint8`:u=new Uint8Array(l);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return I(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?`(Note: it was int64 data type and registered to int32 as workaround)`:``}`),r.constant(i,u)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=un.get(Et(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>`u`?!1:n?!!i?.input.dataTypes.includes(r):!!i?.output.dataTypes.includes(r)}flush(){}}}),mn=u(()=>{}),hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn=u(()=>{Ht(),mn(),hn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),gn=[],_n=e=>Math.ceil(Number(e)/16)*16,vn=e=>{for(let t=0;t<gn.length;t++){let n=gn[t];if(e<=n)return n}return Math.ceil(e/16)*16},yn=1,bn=()=>yn++,xn=async(e,t,n,r)=>{let i=_n(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Sn=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of hn)gn.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=_n(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),I(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=_n(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return I(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=bn();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),I(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),I(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=vn(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:bn(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),I(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return I(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await xn(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus===`default`){for(let e of this.buffersPending){let t=hn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(I(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Cn=(...e)=>new Sn(...e)}),Tn,z,B=u(()=>{Tn=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},z=e=>new Tn(e)}),En,Dn,On,kn,V,H,An,jn,Mn,U,Nn,W,G,Pn,Fn,In,Ln,K=u(()=>{F(),R(),En=64,Dn=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},On=(e,t=1)=>{let n=Dn(e,t);return typeof n==`string`?n:n[0]},kn=(e,t=1)=>{let n=Dn(e,t);return typeof n==`string`?n:n[1]},V=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:L.computeStrides(e)})}),t},H=e=>e%4==0?4:e%2==0?2:1,An=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,jn=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Mn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,U=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Nn=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Dn(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${U(g,e,o)};
    let rest${e} = current % ${U(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${U(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),C=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,w=(e,t)=>o<2?`${e}`:`${U(e,t,o)}`,ee=(e,t,n)=>o<2?`${e}=${n};`:`${U(e,t,o)}=${n};`,T={},E=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in T)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${w(g,e)} * (${t} % ${w(h,e)})`)}return T[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},D=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),O=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),k=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${O(`i2o_${e}(indices)`)};
  }`,A=o<2?``:`
  fn get_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}) -> ${u} {
    return get_${e}ByIndices(${C(s.map(e=>`d${e}`).join(`, `))});
  }`,te=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?O(`0u`):o===1?O(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},ne=t=>o<2?O(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),re=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${D(`i2o_${e}(indices)`,`value`)}
  }`,ie=o<2?``:`
  fn set_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}, value: ${u}) {
    set_${e}ByIndices(${C(s.map(e=>`d${e}`).join(`, `))}, value);
  }`;return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(T).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(ie),t=!0),p.setByIndices&&(e.push(re),t=!0),p.get&&(e.push(A),t=!0),p.getByIndices&&(e.push(k),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${L.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:E,indices:C,indicesGet:w,indicesSet:ee,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?D(`0u`,n):o===1?D(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:D,setByIndices:(t,n)=>o<2?D(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:te,getByOffset:O,getByIndices:ne,usage:r,name:e,strides:g,shape:h,rank:o}},W=(e,t,n,r=1)=>Nn(e,t,n,`input`,r),G=(e,t,n,r=1)=>Nn(e,t,n,`output`,r),Pn=(e,t,n)=>Nn(e,t,n,`atomicOutput`,1),Fn=(e,t,n,r=1)=>Nn(e,t,n,`internal`,r),In=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=En){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ln=(e,t)=>new In(e,t)}),Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn=u(()=>{F(),R(),B(),K(),Rn=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},zn=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,Bn=(e,t)=>L.sortBasedOnPerm(e,zn(e.length,t)),Vn=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},Hn=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Un=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Wn=(e,t)=>{let n=e.dataType,r=e.dims.length,i=zn(r,t),a=Bn(e.dims,i),o=e.dims,s=a,c=r<2||Un(i,e.dims),l;if(c)return l=e=>{let t=W(`input`,n,o,4),r=G(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=L.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=Hn(e.dims,i),f=L.areEqual(d,[2,3,1]),p=L.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=W(`a`,n,o.length),r=G(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=L.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...V(o,s)]}},getShaderSource:l}):(l=e=>{let t=W(`a`,n,o.length),a=G(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${Vn(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=L.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...V(o,s)]}},getShaderSource:l})},Gn=(e,t)=>{Rn(e.inputs,t.perm),e.compute(Wn(e.inputs[0],t.perm))},Kn=e=>z({perm:e.perm})}),Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr=u(()=>{F(),R(),K(),zr(),qn(),Jn={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},Yn={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},Xn={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},Zn={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},Qn=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},$n=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},er=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},tr=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},nr=(e,t)=>{let n=[];if(!tr(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},rr=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=L.size(a),l=L.size(o),u=W(`_A`,n[0].dataType,s),d=G(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Xn[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${Jn[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Yn[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Zn[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},ir=(e,t,n,r)=>{let i=e.inputs.length===1?n:yr(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=L.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=nr(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(Wn(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Qn(s.length,c.dims.length));let[u,d]=$n(c.dims,s),f=u;i.keepDims&&(f=er(u,o)),e.compute(rr(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},ar=(e,t)=>{ir(e,`ReduceMeanShared`,t,`mean`)},or=(e,t)=>{ir(e,`ReduceL1Shared`,t,`l1`)},sr=(e,t)=>{ir(e,`ReduceL2Shared`,t,`l2`)},cr=(e,t)=>{ir(e,`ReduceLogSumExpShared`,t,`logSumExp`)},lr=(e,t)=>{ir(e,`ReduceMaxShared`,t,`max`)},ur=(e,t)=>{ir(e,`ReduceMinShared`,t,`min`)},dr=(e,t)=>{ir(e,`ReduceProdShared`,t,`prod`)},fr=(e,t)=>{ir(e,`ReduceSumShared`,t,`sum`)},pr=(e,t)=>{ir(e,`ReduceSumSquareShared`,t,`sumSquare`)},mr=(e,t)=>{ir(e,`ReduceLogSumShared`,t,`logSum`)}}),gr,_r,vr,yr,br,xr,Sr,Cr,q,wr,Tr,J,Er,Y,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr=u(()=>{F(),R(),B(),K(),hr(),gr=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},_r=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],vr=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=L.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=L.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=W(`_A`,n[0].dataType,u),s=G(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...V(l,c)]})}},yr=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),z({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},br=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:yr(i,n);e.compute(vr(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?_r:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},xr=(e,t)=>{gr(e.inputs),br(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},Sr=(e,t)=>{gr(e.inputs),br(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},Cr=(e,t)=>{gr(e.inputs),br(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},q=(e,t)=>{gr(e.inputs),br(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},wr=(e,t)=>{gr(e.inputs),br(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},Tr=(e,t)=>{gr(e.inputs),br(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},J=(e,t)=>{gr(e.inputs),br(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},Er=(e,t)=>{gr(e.inputs),br(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},Y=(e,t)=>{gr(e.inputs),br(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},Dr=(e,t)=>{gr(e.inputs),br(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},Or=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},kr=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tr(e,t):ar(e,t)},Ar=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sr(e,t):or(e,t)},jr=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cr(e,t):sr(e,t)},Mr=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?q(e,t):cr(e,t)},Nr=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wr(e,t):lr(e,t)},Pr=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?J(e,t):ur(e,t)},Fr=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Er(e,t):dr(e,t)},Ir=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Y(e,t):fr(e,t)},Lr=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dr(e,t):pr(e,t)},Rr=(e,t)=>{Or(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xr(e,t):mr(e,t)}}),Br,Vr,Hr,Ur,Wr=u(()=>{F(),B(),zr(),Br=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},Vr=(e,t)=>{Br(e.inputs),e.compute(vr(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Hr=(e,t)=>{Br(e.inputs),e.compute(vr(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Ur=e=>z(e)}),Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r=u(()=>{F(),R(),mn(),K(),Gr=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Kr=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,qr=(e,t,n,r,i,a,o,s)=>{let c=H(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=On(e.dataType,c),m=kn(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=G(`x`,e.dataType,e.dims,c),r=[n],i=o?W(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?W(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=kn(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Kr(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},Jr=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=H(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&L.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=W(`q`,t.dataType,t.dims,g),o=[a,W(`key`,n.dataType,n.dims,g)];if(b){let e=W(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(W(`attention_bias`,i.dataType,i.dims));let l=s?W(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?W(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=G(`output`,t.dataType,u),_=[h];d&&_.push(G(`present_key`,t.dataType,p,g));let v=kn(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Kr(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},Yr=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&L.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=W(`probs`,t.dataType,t.dims),a=[i,W(`v`,n.dataType,n.dims)];_&&a.push(W(`past_value`,r.dataType,r.dims));let c=o?W(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?W(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[G(`output`,t.dataType,m)];return d&&f.push(G(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Kr(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},Xr=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),p=f>1?l.pastSequenceLength:0,m=p+l.kvSequenceLength,h=c&&L.size(c.dims)>0?c:void 0,g=[t,n];f>1&&o&&L.size(o.dims)>0&&g.push(o),h&&g.push(h),u&&g.push(u),d&&g.push(d);let _=e.compute(Jr(f,t,n,o,h,l,p,u,d),{inputs:g,outputs:f>1?[-1,1]:[-1]})[0];e.compute(qr(_,l.batchSize,l.numHeads,p,l.sequenceLength,m,u,d),{inputs:u&&d?[_,u,d]:[_],outputs:[]});let v=[_,r];f>1&&s&&L.size(s.dims)>0&&v.push(s),u&&v.push(u),d&&v.push(d),e.compute(Yr(f,_,r,s,l,p,u,d),{inputs:v,outputs:f>1?[0,2]:[0]})},Zr=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=G(`output_q`,s[0].dataType,n),r=G(`output_k`,s[0].dataType,n),i=G(`output_v`,s[0].dataType,n),a=W(`input`,s[0].dataType,s[0].dims),o=W(`weight`,s[1].dataType,s[1].dims),c=W(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},Qr=(e,t)=>{let n=Gr(e.inputs,t),[r,i,a]=Zr(e,n);return Xr(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),ei,ti,ni,ri,ii=u(()=>{Ne(),F(),R(),B(),K(),ei=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},ti=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?H(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=L.size(a)/o,l=r,u=l?a.length:a,d=W(`x`,e[0].dataType,e[0].dims,o),f=W(`scale`,e[1].dataType,e[1].dims,s),p=W(`bias`,e[2].dataType,e[2].dims,s),m=W(`inputMean`,e[3].dataType,e[3].dims,s),h=W(`inputVar`,e[4].dataType,e[4].dims,s),g=G(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...V(a)]:[{type:12,data:c}]})}},ni=e=>z(e),ri=(e,t)=>{let{inputs:n,outputCount:r}=e,i=ni({...t,outputCount:r});if(T.webgpu.validateInputContent&&ei(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(ti(n,i))}}),ai,oi,si,ci=u(()=>{R(),K(),ai=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},oi=e=>{let t=e[0].dims,n=e[0].dims[2],r=L.size(t)/4,i=e[0].dataType,a=W(`input`,i,t,4),o=W(`bias`,i,[n],4),s=W(`residual`,i,t,4),c=G(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},si=e=>{ai(e.inputs),e.compute(oi(e.inputs))}}),li,X,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i=u(()=>{F(),R(),B(),K(),li=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=W(`inputData`,n,[s],4),u=G(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},X=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(L.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>li(t,L.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(L.size(t[0].dims)/64/4)},programUniforms:c})}},ui=e=>{e.compute(X(e.inputs[0],`Abs`,`abs`))},di=e=>{e.compute(X(e.inputs[0],`Acos`,`acos`))},fi=e=>{e.compute(X(e.inputs[0],`Acosh`,`acosh`))},pi=e=>{e.compute(X(e.inputs[0],`Asin`,`asin`))},mi=e=>{e.compute(X(e.inputs[0],`Asinh`,`asinh`))},hi=e=>{e.compute(X(e.inputs[0],`Atan`,`atan`))},gi=e=>{e.compute(X(e.inputs[0],`Atanh`,`atanh`))},_i=e=>z(e),vi=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(X(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},yi=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return z({min:t,max:n})},bi=(e,t)=>{let n=t||yi(e.inputs),r=kn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},xi=e=>{e.compute(X(e.inputs[0],`Ceil`,`ceil`))},Si=e=>{e.compute(X(e.inputs[0],`Cos`,`cos`))},Ci=e=>{e.compute(X(e.inputs[0],`Cosh`,`cosh`))},wi=e=>z(e),Ti=(e,t)=>{let n=kn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ei=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Di=e=>{let t=kn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,Ei(t)))},Oi=e=>{e.compute(X(e.inputs[0],`Exp`,`exp`))},ki=e=>{e.compute(X(e.inputs[0],`Floor`,`floor`))},Ai=e=>{let t=kn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Ei(t)))},ji=(e,t)=>{let n=kn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Mi=e=>{e.compute(X(e.inputs[0],`Not`,e=>`!${e}`))},Ni=e=>{e.compute(X(e.inputs[0],`Neg`,e=>`-${e}`))},Pi=e=>{e.compute(X(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},Fi=e=>{let t=kn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Ii=e=>{e.compute(X(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},Li=e=>z(e),Ri=(e,t)=>{let n=kn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},zi=e=>{e.compute(X(e.inputs[0],`Sin`,`sin`))},Bi=e=>{e.compute(X(e.inputs[0],`Sinh`,`sinh`))},Vi=e=>{e.compute(X(e.inputs[0],`Sqrt`,`sqrt`))},Hi=e=>{e.compute(X(e.inputs[0],`Tan`,`tan`))},Ui=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Wi=e=>{e.compute(X(e.inputs[0],`Tanh`,Ui))},Gi=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ui(`v`)};
}
`,Ki=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,qi=e=>{let t=kn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`FastGelu`,Ki,Gi(t),void 0,e.inputs[0].dataType))},Ji=(e,t)=>{let n=kn(e.inputs[0].dataType);return e.compute(X(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Yi=e=>{e.compute(X(e.inputs[0],`Log`,`log`))},Xi=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Zi=e=>`quick_gelu_impl(${e})`,Qi=(e,t)=>{let n=kn(e.inputs[0].dataType);e.compute(X(e.inputs[0],`QuickGelu`,Zi,Xi(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ea,ta,na,ra=u(()=>{R(),K(),$i(),ea=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},ta=e=>{let t=e[0].dims.slice();t[2]/=2;let n=W(`input`,e[0].dataType,e[0].dims,4),r=W(`bias`,e[0].dataType,[e[0].dims[2]],4),i=G(`output`,e[0].dataType,t,4),a=L.size(t)/4,o=On(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${Ei(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},na=e=>{ea(e.inputs),e.compute(ta(e.inputs))}}),ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a=u(()=>{F(),R(),K(),ia=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=G(`outputData`,u,r.length,4),h=W(`aData`,c,t.length,4),g=W(`bData`,l,n.length,4),_;if(i)if(a){let e=L.size(t)===1,r=L.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)));else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},aa=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),c=r.dims.map(Number),l=!L.areEqual(s,c),u=s,d=L.size(s),f=!1,p=!1,m=[l];if(l){let e=Wt.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=L.size(u);let t=L.size(s)===1,n=L.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>ia(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(L.size(u)/4)},...V(s,c,u)]})}},oa=(e,t,n,r,i,a)=>{e.compute(aa(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},sa=e=>{oa(e,`Add`,(e,t)=>`${e}+${t}`)},ca=e=>{oa(e,`Div`,(e,t)=>`${e}/${t}`)},la=e=>{oa(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},ua=e=>{oa(e,`Mul`,(e,t)=>`${e}*${t}`)},da=e=>{let t=W(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;oa(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},fa=e=>{oa(e,`Sub`,(e,t)=>`${e}-${t}`)},pa=e=>{oa(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},ma=e=>{oa(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},ha=e=>{oa(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},ga=e=>{oa(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),va,ya,ba,xa,Sa,Ca,wa=u(()=>{F(),R(),B(),K(),va=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},ya=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ba=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},xa=(e,t,n,r)=>{let i=L.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=W(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...V(e[t].dims));u.push(...V(n));let d=G(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${ya(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ba(o,d)}
  }`}},Sa=(e,t)=>{let n=e.inputs,r=n[0].dims,i=L.normalizeAxis(t.axis,r.length);va(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>L.size(e.dims)>0);e.compute(xa(o,i,a,n[0].dataType),{inputs:o})},Ca=e=>z({axis:e.axis})}),Ta,Ea,Da,Oa,ka=u(()=>{F(),R(),Ta=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},Ea=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},Da=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},Oa=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t===`Clip`){let[n,r]=e?.activation_params||[qt,Jt];return{activation:t,clipMax:r,clipMin:n}}else if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Aa,ja,Ma=u(()=>{Aa=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},ja=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),Na,Pa=u(()=>{Na=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Fa,Ia,La=u(()=>{F(),R(),K(),ka(),Fa=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${U(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,U(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},Ia=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=H(l),f=H(u),p=H(c),m=L.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[L.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return Ea(t,v),v.push(...V(g,o,s)),h&&v.push(...V(e[2].dims)),v.push(...V(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Fn(`batch_dims`,e[0].dataType,g.length),c=W(`a`,e[0].dataType,o.length,f),l=W(`b`,e[1].dataType,s.length,d),u=G(`output`,e[0].dataType,_.length,d),m=On(u.type.tensor),v=Ta(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(W(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];Da(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${Fa(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${Fa(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka=u(()=>{F(),R(),K(),ka(),La(),Ma(),Ra=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,za=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,Ba=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&u%t[0]===0&&a%t[1]===0&&e[0]===4))throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ra(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${za(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Va=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,Ha=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,Ua=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(!(f%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${Va(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Va(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Ha(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},Wa=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=On(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Aa(e,l)} {
      var value = ${Aa(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Fa(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Aa(e,l)} {
      var value = ${Aa(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Fa(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Aa(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${Aa(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},Ga=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=L.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],C=S.length,w=[d,f,m/y],ee=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];Ea(t,ee),ee.push(...V(u,b,S));let T=[`rank`,`rank`],E=e.length>2;return E&&(ee.push(...V(e[2].dims)),T.push(`rank`)),ee.push(...V(w)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:ee}),getShaderSource:n=>{let r=u.length,a=Fn(`batchDims`,e[0].dataType,r,1),o=On(e[0].dataType),s=W(`a`,e[0].dataType,x,y),c=W(`b`,e[1].dataType,C,y),l=G(`result`,e[0].dataType,w.length,y),d=[s,c];if(E){let t=i?y:1;d.push(W(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];Da(t,f);let p=On(l.type.tensor),m=Ta(t,l.type.value,p),v=Wa(y,E,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?Ba(g,_,o,a):Ua(g,_,o,a)}
                   `}}}}),qa,Ja,Ya=u(()=>{F(),Ht(),K(),ka(),Ma(),Pa(),Ka(),qa=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${Aa(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${Aa(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${Aa(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Aa(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Aa(s,l)}(0.0);`,x=Aa(c,l),S=Aa(e?o:s,l),C=Aa(e?s:o,l),w=Ta(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${ja(i)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ja=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];I(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],C=v[0]*y[0],w=Math.max(v[0]*x,v[1]),ee=r%S===0,T=i%C===0,E=a%w===0,D=h?[x,4,4]:[1,1,1],O=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ea(t,O),O.push(...V(e[0].dims,e[1].dims));let k=[`rank`,`rank`];return o&&(O.push(...V(e[2].dims)),k.push(`rank`)),O.push(...V(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${ee};${T};${E};${S};${C};${w}`,inputDependencies:k},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:O}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];Da(t,i);let a=h?4:1,c=On(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[W(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),W(`w`,e[1].dataType,e[1].dims.length,a)],f=G(`result`,e[0].dataType,n.length,a);if(o){let t=W(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${Na(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${qa(l,ee,T,E,o,t,D[0],D[1],D[2],c)}
        ${h?Ba(y,v,c,void 0,!l,w):Ua(y,v,c,void 0,!l,w,!1,void 0,s)}`}}}}),Xa,Za,Qa,$a,eo,to,no,ro,io=u(()=>{F(),Ht(),R(),K(),ka(),Ma(),Xa=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Za=e=>typeof e==`number`?[e,e,e]:e,Qa=(e,t)=>t<=1?e:e+(e-1)*(t-1),$a=(e,t,n,r=1)=>{let i=Qa(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},eo=(e,t,n,r,i)=>{i??=$a(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},to=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=eo([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=eo([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},no=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=Za(n),[y,b,x]=Za(r),S=Qa(p,y),C=Qa(m,b),w=Qa(h,x),{padInfo:ee,outDepth:T,outHeight:E,outWidth:D}=to(i,c,l,u,g,_,v,S,C,w),O=a?f*d:f,k=[0,0,0,0,0];return o===`channelsFirst`?k=[s,O,T,E,D]:o===`channelsLast`&&(k=[s,T,E,D,O]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:T,outHeight:E,outWidth:D,outChannels:O,padInfo:ee,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:C,effectiveFilterWidth:w,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:k,filterShape:t}},ro=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(Xa(c.x.map(e=>n[e]))/s[0]),1,1];I(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:L.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ea(t,u),u.push(...V(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...V(e[2].dims)),d.push(`rank`)),u.push(...V(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];Da(t,s);let c=On(e[0].dataType),l=W(`x`,e[0].dataType,e[0].dims.length,1),u=W(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=G(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=W(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?U(`coords`,4,5):U(`coords`,1,5)}];
        }`}let h=Aa(1,c),g=Ta(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${U(`coords`,0,l.rank)};
              let d2 = ${o?U(`coords`,l.rank-1,l.rank):U(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?U(`coords`,1,l.rank):U(`coords`,2,l.rank)},
              ${o?U(`coords`,2,l.rank):U(`coords`,3,l.rank)},
              ${o?U(`coords`,3,l.rank):U(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?U(`uniforms.x_shape`,1,l.rank):U(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?U(`uniforms.x_shape`,2,l.rank):U(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?U(`uniforms.x_shape`,3,l.rank):U(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?U(`uniforms.x_shape`,4,l.rank):U(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),ao,oo,so=u(()=>{F(),R(),K(),ka(),ao=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?H(l):1,f=L.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];Ea(t,p),p.push(...V(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...V([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=G(`output`,e[0].dataType,n.length,d),u=On(l.type.tensor),f=Ta(t,l.type.value,u),p=W(`x`,e[0].dataType,o.length),m=W(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(W(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];Da(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},oo=(e,t,n,r)=>{let i=e.length>2,a=H(n[3]),o=H(n[2]),s=L.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ea(t,d),d.push(...V(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=G(`output`,e[0].dataType,u.length,a),s=On(r.type.tensor),d=Ta(t,r.type.value,s),p=W(`x`,e[0].dataType,c.length,a),m=W(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(W(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return Da(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),co,lo,uo,fo,po,mo,ho,go,_o,vo=u(()=>{R(),Ya(),io(),Ka(),so(),ka(),La(),qn(),co=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},lo=[2,3,1,0],uo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},fo=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();Gt.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},po=e=>{let t=Oa(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},mo=(e,t,n,r)=>{let i=n.format===`NHWC`,a=co(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(Wn(t[1],lo),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(oo(o,n,a,r),{inputs:o}):e.compute(ao(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(Wn(t[1],lo),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(Ia(v,n,a,_,i,r),{inputs:v}):e.compute(Ga(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(Wn(t[1],lo),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(Ja(_,n,a,v,y,b,o,!0,r),{inputs:_})},ho=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=fo({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);mo(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},go=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=fo(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=no(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(ro(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},_o=(e,t)=>{if(uo(e.inputs,t),e.inputs[0].dims.length===3)ho(e,t);else if(e.inputs[0].dims.length===5)go(e,e.inputs,t);else{let n=fo(t,e.inputs);mo(e,e.inputs,n)}}}),yo,bo=u(()=>{F(),Ht(),R(),K(),yo=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?H(c):1,d=a&&l===1&&c>=4,f=d?Math.floor(c/4)*4:Math.floor(c/u)*u,p=c-f,m=a?H(l):1,h=a?l===1?u:m:1,g=L.size(i)/m,_=[Math.ceil(g/64),1,1];I(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let v=[`rank`,`rank`],y=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],x=[t.dilations[0],t.dilations[1]],S=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],w=[{type:12,data:g},{type:12,data:y},{type:12,data:b},{type:12,data:x},{type:12,data:S},{type:6,data:C},{type:12,data:f},{type:12,data:c},{type:12,data:l},...V(e[0].dims,e[1].dims)];return r&&(w.push(...V(e[2].dims)),v.push(`rank`)),w.push(...V(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${h}${m}${d}${p}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:w}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:y.length},{name:`filter_dims`,type:`u32`,length:b.length},{name:`dilations`,type:`u32`,length:b.length},{name:`effective_filter_dims`,type:`u32`,length:S.length},{name:`pads`,type:`i32`,length:C.length},{name:`input_channels_per_group_int`,type:`u32`},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=On(e[0].dataType),s=a?1:2,c=a?2:3,l=a?3:1,f=W(`W`,e[1].dataType,e[1].dims.length,h),g=W(`Dy`,e[0].dataType,e[0].dims.length,u),_=[g,f];r&&_.push(W(`bias`,e[2].dataType,[i[l]].length,m));let v=G(`result`,e[0].dataType,i.length,m),x=`
            let outputIndices = ${v.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${v.indicesGet(`outputIndices`,0)};
            let d1 = ${v.indicesGet(`outputIndices`,l)};
            let r = ${v.indicesGet(`outputIndices`,s)};
            let c = ${v.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${v.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u};
                var w_offset = ${f.indicesToOffset(`${f.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${h};
                  `:``}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:u}) {
                  ${(()=>{let e=``;if(d)u===4?e+=`
        let xValue = ${g.getByOffset(`x_offset`)};
        let wValue = ${f.getByOffset(`w_offset`)};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:u===2?e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}));
          x_offset += 2u;
          w_offset += 2u;`:u===1&&(e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}, ${g.getByOffset(`x_offset + 2u`)}, ${g.getByOffset(`x_offset + 3u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}, ${f.getByOffset(`w_offset + 2u`)}, ${f.getByOffset(`w_offset + 3u`)}));
          x_offset += 4u;
          w_offset += 4u;`);else if(e+=`
                  let xValue = ${a?g.getByOffset(`${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):g.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
        `,u===1)e+=`
          let w_offset = ${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${f.getByOffset(`w_offset / ${h}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${f.getByOffset(`${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${d?4:u};
                }
                ${(()=>{if(p===0)return``;if(!d)throw Error(`packInputAs4 ${d} is not true.`);let e=``;if(u===1){e+=`dotProd = dotProd`;for(let t=0;t<p;t++)e+=`
            + ${g.getByOffset(`x_offset + ${t}`)} * ${f.getByOffset(`w_offset + ${t}`)}`;e+=`;`}else if(u===2){if(p!==2)throw Error(`Invalid inputChannelsRemainder ${p}.`);e+=`
          let xValue = ${g.getByOffset(`x_offset`)};
          let wValue = ${f.getByOffset(`w_offset`)};
          dotProd = dotProd + dot(xValue, wValue);`}return e})()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:``};
            ${v.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(..._,v)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${x}}`}}}}),xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao=u(()=>{bo(),ka(),qn(),xo=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,So=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},Co=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-(s?1:0);i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=xo(s,o[i],a[i],t[f],n[i],p);So(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},wo=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}Co(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},To=e=>{let t=Oa(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Eo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},Do=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Wn(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(yo(a,n,r),{inputs:a})},Oo=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=wo({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);Do(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},ko=(e,t)=>{if(Eo(e.inputs,t),e.inputs[0].dims.length===3)Oo(e,t);else{let n=wo(t,e.inputs);Do(e,e.inputs,n)}}}),jo,Mo,No,Po=u(()=>{F(),R(),B(),K(),jo=(e,t,n,r)=>{let i=L.size(t),a=t.length,o=W(`input`,e,a),s=G(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=L.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...V(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=U(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},Mo=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(jo(r,n,i,t),{inputs:[0]})},No=e=>{let t=e.exclusive===1,n=e.reverse===1;return z({exclusive:t,reverse:n})}}),Fo,Io,Lo,Ro,zo,Bo=u(()=>{F(),R(),B(),K(),Fo=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},Io=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},Lo=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=W(`a`,p,f),h=G(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=L.size(t),u=d.dims,f=L.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...V(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${Io(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},Ro=(e,t)=>{Fo(e.inputs),e.compute(Lo(e.inputs[0],t))},zo=e=>z({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo=u(()=>{F(),R(),B(),K(),Vo=`[a-zA-Z]|\\.\\.\\.`,Ho=`(`+Vo+`)+`,Uo=`^`+Ho+`$`,Wo=`(`+Ho+`,)*`+Ho,Go=`^`+Wo+`$`,Ko=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},qo=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(Go)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(Uo)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(Ho)))throw Error(`Invalid RHS`);r.match(RegExp(Vo,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Uo))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(Vo,`g`)),l=new Ko(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},Jo=e=>e+`_max`,Yo=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>W(`input${n}`,t,e)),a=L.size(r),o=G(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...V(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...V(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${Jo(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${Jo(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Xo=(e,t)=>{let n=new qo(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(Yo(i,e.inputs[0].dataType,n,r))},Zo=e=>{let t=e.equation.replace(/\s+/g,``);return z({equation:t})}}),$o,es,ts,ns,rs,is=u(()=>{F(),R(),K(),$o=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},es=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},ts=(e,t)=>e.length>t.length?es(e,t):es(t,e),ns=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=ts(t,n),i=e[0].dataType,a=i===9||L.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(L.size(r)/s),l=e=>{let n=W(`input`,i,t.length,o),a=G(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...V(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},rs=e=>{$o(e.inputs),e.compute(ns(e.inputs),{inputs:[0]})}}),as,os,ss=u(()=>{F(),R(),K(),$i(),as=e=>{let t=e[0].dataType,n=L.size(e[0].dims),r=L.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=W(`x`,t,[1],4),r=W(`bias`,t,[1],4),a=G(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${Gi(kn(t))}

    ${e.mainStart(En)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,Ki(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/En/4)}})}},os=e=>{e.inputs.length<2||L.size(e.inputs[1].dims)===0?qi(e):e.compute(as(e.inputs))}}),cs,ls,us,ds,fs=u(()=>{F(),R(),B(),K(),cs=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},ls=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=L.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(L.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...V(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=W(`data`,e[0].dataType,e[0].dims.length,c),s=W(`inputIndices`,e[1].dataType,e[1].dims.length),l=G(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},us=e=>z({axis:e.axis}),ds=(e,t)=>{let n=e.inputs;cs(n),e.compute(ls(e.inputs,t))}}),ps,ms,hs,gs=u(()=>{F(),R(),K(),ps=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...V(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[W(`indices_data`,t.dataType,t.dims.length),G(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},ms=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=L.sizeToDimension(a,a.length-1),c=L.sizeFromDimension(r,t.batchDims+o),l=L.sizeToDimension(r,t.batchDims),u=L.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=ps(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=L.size(g),v=[{type:12,data:_},{type:12,data:c},...V(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=W(`data`,n[0].dataType,n[0].dims.length),r=W(`slice_offsets`,12,m.dims.length),i=G(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},hs=e=>({batchDims:e.batch_dims,cacheKey:``})}),_s,vs,ys,bs,xs=u(()=>{F(),R(),B(),K(),_s=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=L.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},vs=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=L.normalizeAxis(t.gatherAxis,i),o=L.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=L.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...V(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=W(`data`,e[0].dataType,e[0].dims.length),o=W(`inputIndices`,e[1].dataType,e[1].dims.length),c=W(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?W(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=G(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${kn(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},ys=(e,t)=>{let n=e.inputs;_s(n,t),e.compute(vs(e.inputs,t))},bs=e=>z({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Ss,Cs,ws,Ts,Es=u(()=>{F(),R(),B(),K(),Ss=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Cs=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=L.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=L.size(l),d=W(`input`,r,i),f=W(`indicesInput`,o,a.length),p=G(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...V(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},ws=e=>z({axis:e.axis}),Ts=(e,t)=>{let n=e.inputs;Ss(n),e.compute(Cs(e.inputs,t))}}),Ds,Os,ks,As,js=u(()=>{F(),R(),K(),Ds=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},Os=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=Kt.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);L.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...V(e[2].dims)),d.push(`rank`)),u.push(...V(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=W(`a`,e[0].dataType,e[0].dims),i=W(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=W(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=G(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},ks=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),As=(e,t)=>{Ds(e.inputs),e.compute(Os(e.inputs,t))}}),Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks=u(()=>{F(),R(),B(),K(),[Ms,Ns,Ps,Fs]=[0,1,2,3],Is=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},Ls=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Rs=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,zs=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Bs=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,Vs=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ms}] = batch;
     indices[${Ns}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ps}] = u32(r);
            indices[${Fs}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case`border`:return`
          indices[${Ps}] = u32(clamp(r, 0, H - 1));
          indices[${Fs}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${Ps}] = gs_reflect(r, border[1], border[3]);
          indices[${Fs}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,Hs=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ms}], indices[${Ns}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ms}], indices[${Ns}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ms}], indices[${Ns}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ms}], indices[${Ns}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ms}], indices[${Ns}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ms}], indices[${Ns}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,Us=(e,t)=>{let n=W(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=W(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ms,Ns,Ps,Fs]=[0,3,1,2]);let o=G(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:L.size(a)},...V(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=L.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${Ls}
  ${Rs(s)}
  ${zs(t)}
  ${Bs(t)}
  ${Vs(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${Ps}]);
      let W_in = i32(uniforms.x_shape[${Fs}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${Ms}], indices[${Ps}], indices[${Fs}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Hs(o,s,t)}
  }`}},Ws=(e,t)=>{Is(e.inputs),e.compute(Us(e.inputs,t))},Gs=e=>z({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),qs,Js,Ys,Xs,Zs,Qs,$s,ec=u(()=>{F(),R(),B(),mn(),$r(),K(),qn(),qs=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Js=(e,t)=>{let n=e[0],r=qs(e,1),i=qs(e,2),a=qs(e,3),o=qs(e,4),s=qs(e,5),c=qs(e,6),l=qs(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&L.size(c.dims)&&L.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&L.size(c.dims)||l&&L.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&L.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&L.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&L.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&L.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&L.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&L.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Ys=e=>z({...e}),Xs=z({perm:[0,2,1,3]}),Zs=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=L.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=G(`qkv_with_bias`,t.dataType,s),i=W(`qkv`,t.dataType,s),a=W(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},Qs=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&L.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=Zs(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(Wn(c,Xs.perm),{inputs:[c],outputs:[-1]})[0]}else return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(Wn(c,Xs.perm),{inputs:[c],outputs:[-1]})[0]},$s=(e,t)=>{let n=Js(e.inputs,t),r=e.inputs[0],i=qs(e.inputs,1),a=qs(e.inputs,2),o=qs(e.inputs,3),s=qs(e.inputs,4),c=qs(e.inputs,5),l=qs(e.inputs,6),u=qs(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=Qs(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return Xr(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=Qs(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=Qs(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);Xr(e,f,p,m,s,void 0,l,u,c,n)}}),tc,nc,rc,ic,ac,oc,sc,cc=u(()=>{F(),R(),B(),K(),tc=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},nc=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),z({numOutputs:r,axis:t.axis,splitSizes:n})},rc=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${U(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,ic=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},ac=(e,t)=>{let n=e[0].dims,r=L.size(n),i=e[0].dataType,a=L.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=W(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=G(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...V(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${rc(c.length)}
  ${ic(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${U(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},oc=(e,t)=>{tc(e.inputs);let n=e.inputs.length===1?t:nc(e.inputs,t);e.compute(ac(e.inputs,n),{inputs:[0]})},sc=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes length must be equal`);return z({axis:t,numOutputs:r,splitSizes:n})}}),lc,uc,dc,fc=u(()=>{F(),R(),B(),K(),lc=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!L.areEqual(r.dims,[])&&!L.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!L.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=L.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`)},uc=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=L.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=L.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...V(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:z({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=W(`input`,e[0].dataType,e[0].dims.length),i=W(`position_ids`,e[1].dataType,e[1].dims.length),a=W(`cos_cache`,e[2].dataType,e[2].dims.length),o=W(`sin_cache`,e[3].dataType,e[3].dims.length),s=G(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(En)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,G(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(L.size(f)/En)},programUniforms:m})}},dc=(e,t)=>{lc(e.inputs,t),e.compute(uc(e.inputs,t))}}),pc,mc,hc,gc,_c,vc=u(()=>{B(),F(),$r(),ec(),cc(),qn(),fc(),K(),pc=(e,t)=>{if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw Error(`cos_cast and sin_cache are expected if do_rotary attribute is non-zero`);if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y&&y.dims.length!==1&&y.dims[0]!==s)throw Error(`Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size`);return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},mc=z({perm:[0,2,1,3]}),hc=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Wn(r,mc.perm),{inputs:[r],outputs:[-1]})[0]),r},gc=(e,t,n,r)=>{let i=[`type`,`type`],a=[e*t],o=e*t,s=[{type:12,data:o},{type:12,data:t},{type:12,data:e}];return{name:`GeneratePositionIds`,shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:a,dataType:7}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s}),getShaderSource:e=>{let t=W(`seq_lens`,n.dataType,n.dims),i=W(`total_seq_lens`,r.dataType,r.dims),o=G(`pos_ids`,7,a);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`batch_size`,type:`u32`}]).declareVariables(t,i,o)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let total_sequence_length = u32(${i.getByOffset(`0`)});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${t.getByOffset(`batch_idx`)};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (global_idx < uniforms.batch_size) {
      ${o.setByOffset(`global_idx`,`seqlen`)}
    };
  }
  `}}},_c=(e,t)=>{let n=pc(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=z({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(ac([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h,g;if(t.doRotary){let r=e.compute(gc(n.batchSize,n.sequenceLength,c,l),{inputs:[c,l],outputs:[-1]})[0],i=e.inputs[7],a=e.inputs[8],o=z({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),s=[f,r,i,a],u=[-1];h=e.compute(uc(s,o),{inputs:s,outputs:u})[0],s.splice(0,1,p);let d=z({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});g=e.compute(uc(s,d),{inputs:s,outputs:u})[0]}let _=Qs(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?h:f,void 0,0),v=hc(e,t.doRotary?g:p,n),y=hc(e,m,n);Xr(e,_,v,y,void 0,void 0,o,s,void 0,n,c,l)}}),yc,bc,xc,Sc,Cc=u(()=>{F(),R(),qn(),K(),yc=(e,t,n,r,i,a,o,s)=>{let c=H(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...V(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=W(`x`,t.dataType,3,c),a=[i,W(`scale`,n.dataType,n.dims),W(`bias`,r.dataType,r.dims),G(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Mn(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${Mn(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},bc=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=L.sizeFromDimension(r,2),c=H(s),l=L.size(i)/c,u=yc(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...V(d,f,d)]}),getShaderSource:e=>{let n=W(`x`,t[0].dataType,d.length,c),r=W(`scale_shift`,1,f.length,2),i=G(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},xc=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=L.sizeFromDimension(r,1)/o,c=H(o),l=L.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(Wn(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=yc(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=On(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=W(`input`,t[0].dataType,t[0].dims,c),s=G(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},Sc=(e,t)=>{t.format===`NHWC`?xc(e,e.inputs,t):bc(e,e.inputs,t)}}),wc,Tc,Ec,Dc=u(()=>{F(),R(),K(),wc=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},Tc=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=L.normalizeAxis(t.axis,i.length),l=L.sizeToDimension(i,c),u=L.sizeFromDimension(i,c),d=L.size(a.dims),f=o?L.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=H(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=On(e[0].dataType),i=[W(`x`,e[0].dataType,e[0].dims,m),W(`scale`,a.dataType,a.dims,m)];return o&&i.push(W(`bias`,o.dataType,o.dims,m)),i.push(G(`output`,e[0].dataType,s,m)),_&&i.push(G(`mean_data_output`,1,p)),v&&i.push(G(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${An(`f32`,m)};
    var mean_square_vector = ${An(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${jn(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Mn(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Mn(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${jn(n,m,`x[j + offset]`)};
      let f32scale = ${jn(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${jn(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},Ec=(e,t)=>{wc(e.inputs),e.compute(Tc(e.inputs,t,e.outputCount))}}),Oc,kc,Ac=u(()=>{R(),La(),Ka(),Oc=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},kc=e=>{Oc(e.inputs);let t=Wt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Ia(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=L.size(e.inputs[0].dims.slice(0,-2)),o=L.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(Ga(c,{activation:``},t,s),{inputs:c})}else e.compute(Ga(e.inputs,{activation:``},t))}}}),jc,Mc,Nc,Pc,Fc,Ic=u(()=>{F(),R(),B(),K(),jc=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!L.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(L.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(L.size(n)!==r)throw Error(`zeroPoints input size error.`)}},Mc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=L.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=H(t.k),f=H(l),p=H(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=L.size(m)/p/h,_=[],v=[c,i,a/d],y=L.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...V(v)),_.push(...V(y)),_.push(...V(e[2].dims)),e.length===4&&_.push(...V(L.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...V(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=W(`a`,e[0].dataType,r,d),a=W(`b`,12,y.length,f),o=W(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?W(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=G(`output`,e[0].dataType,u,p),g=On(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=()=>{let e=`
          // reuse a data
            var input_offset = ${i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_};
            for (var j: u32 = 0; j < ${8/d}; j++) {
              a_data[j] = ${i.getByOffset(`input_offset`)};
              input_offset++;
            }
          `;for(let t=0;t<p*h;t++)e+=`
            b_value = ${f===1?`b${t}_data`:`b${t}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,n)=>`(b_quantized_values[${n}] - ${c?`zero_point${t}`:`zero_point`}) * scale${t}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${t}`:`zero_point`}`).join(`,`)})) * scale${t};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(t/p)}]${p>1?`[${t%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data[${t}] * b_dequantized_values[${t}]`:`dot(a_data[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `;return e},S=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${g}(8);`}
            `;for(let t=0;t<p*h;t++)e+=`
            let scale${t} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${t} = ${g}((zero_point_word) & 0xFu);`:``}
            col_index += 1;`;return e},C=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${S()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${C()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${x()}
                word_offset += ${8/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},Nc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=L.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=H(t.k),f=H(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=h*f*8,_=g/d,v=g/t.blockSize,y=L.size(p)/m,b=[],x=[c,i,a/d],S=L.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),b.push(...V(x)),b.push(...V(S)),b.push(...V(e[2].dims)),e.length===4&&b.push(...V(L.convertShape(e[3].dims)));let C=[c,i,o];return b.push(...V(C)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:y},programUniforms:b}),getShaderSource:n=>{let r=x.length,i=W(`a`,e[0].dataType,r,d),a=W(`b`,12,S.length,f),o=W(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?W(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=C.length,u=G(`output`,e[0].dataType,l),p=On(e[0].dataType),g=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${c?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${p}(8);`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${g()}
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
              let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              word_offset += ${8/d};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},Pc=(e,t)=>{jc(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(Nc(e.inputs,t)):e.compute(Mc(e.inputs,t))},Fc=e=>z(e)}),Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc=u(()=>{F(),R(),K(),Lc=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},Rc=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${U(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},zc=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${U(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Bc=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                  k = i32(${U(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Vc=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${U(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${U(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Hc=(e,t,n)=>{switch(n.mode){case 0:return Rc(e,t,n.pads.length);case 1:return zc(e,t,n.pads.length);case 2:return Bc(e,t,n.pads.length);case 3:return Vc(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},Uc=(e,t)=>{let n=L.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:L.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...V(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(L.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=G(`output`,e[0].dataType,n.length),s=W(`x`,e[0].dataType,r.length),c=s.type.value,l=Hc(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},Wc=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}else return t},Gc=(e,t)=>{Lc(e.inputs);let n=Wc(e.inputs,t);e.compute(Uc(e.inputs,n),{inputs:[0]})}}),qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl=u(()=>{Ne(),F(),R(),K(),qc=e=>{if(T.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},Jc=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();Gt.adjustPoolAttributes(n,i,o,s,c,l);let u=Gt.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},Yc=(e,t)=>{let n=t.format===`NHWC`,r=L.size(e),i=L.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}else{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=L.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},Xc=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=G(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}else{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${U(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${U(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${U(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${U(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},Zc=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Qc=e=>`${Zc(e)};${e.countIncludePad}`,$c=e=>`${Zc(e)};${e.storageOrder};${e.dilations}`,el=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),tl=(e,t,n,r)=>{let[i,a]=Jc(t,r,n),o=W(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=Yc(a,i);return l.push(...V(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(L.size(a)/64)},programUniforms:l}),getShaderSource:e=>Xc(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},nl=e=>{let t=e.count_include_pad!==0,n=el(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:Qc(r)}},rl=(e,t)=>{qc(e.inputs),e.compute(tl(`AveragePool`,e.inputs[0],!1,t))},il={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},al=e=>{let t=e.format;return{format:t,...il,cacheKey:t}},ol=(e,t)=>{qc(e.inputs),e.compute(tl(`GlobalAveragePool`,e.inputs[0],!0,t))},sl=(e,t,n,r)=>{let[i,a]=Jc(t,r,n),o=W(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=Yc(a,i);return c.push(...V(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(L.size(a)/64)},programUniforms:c}),getShaderSource:e=>Xc(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},cl=(e,t)=>{qc(e.inputs),e.compute(sl(`MaxPool`,e.inputs[0],!1,t))},ll=e=>{let t=e.storage_order,n=e.dilations,r=el(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:$c(i)}},ul=e=>{let t=e.format;return{format:t,...il,cacheKey:t}},dl=(e,t)=>{qc(e.inputs),e.compute(sl(`GlobalMaxPool`,e.inputs[0],!0,t))}}),pl,ml,hl,gl,_l=u(()=>{F(),R(),B(),K(),pl=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[0].dataType===6&&e.length>2)throw Error(`In the case of dequantizing int32 there is no zero point.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},ml=(e,t)=>{let n=L.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=L.size(a),c=r===3||r===2,l=c?[Math.ceil(L.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(L.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=H(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=W(`input`,c?12:r,l.length,v),b=W(`scale`,o,u.length),x=d?W(`zero_point`,c?12:r,f.length):void 0,S=G(`output`,o,a.length,_),C=[y,b];x&&C.push(x);let w=[l,u];d&&w.push(f);let ee=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...V(...w,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...C,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:ee})}},hl=(e,t)=>{pl(e.inputs,t),e.compute(ml(e.inputs,t))},gl=e=>z({axis:e.axis,blockSize:e.blockSize})}),vl,yl,bl,xl=u(()=>{Ne(),F(),K(),vl=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},yl=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...V(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=G(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},bl=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),T.webgpu.validateInputContent&&vl(t,n,r),e.compute(yl(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Sl,Cl,wl,Tl,El=u(()=>{F(),R(),B(),K(),Sl=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},Cl=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(L.sizeToDimension(r,r.length-1)/1),o=r[r.length-1],s=L.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...V(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let r=W(`indices`,e[1].dataType,e[1].dims.length),a=W(`updates`,e[2].dataType,e[2].dims.length,1),o=t.reduction!==`none`&&t.reduction!==``?Pn(`output`,e[0].dataType,i.length):G(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(r,a,o)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Sl(t.reduction,`output[data_offset + i]`,`value`,o.type.value)}
  }

      }`}}},wl=e=>z({reduction:e.reduction}),Tl=(e,t)=>{e.compute(Cl(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql=u(()=>{F(),R(),B(),K(),Dl=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},Ol=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},kl=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);Dl(r,t),t.axes.length>0&&Ol(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},Al=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,jl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Al(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Al(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,Ml=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,Nl=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},Pl=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e));else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},Fl=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},Il=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${U(`uniforms.scales`,`i`,r)};
        var roi_low = ${U(`uniforms.roi`,`i`,i)};
        var roi_hi = ${U(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${U(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${U(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Ll=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${U(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${U(`uniforms.roi`,`i`,a)};
          var roi_hi = ${U(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${U(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${U(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,Rl=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${U(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,zl=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,Bl=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${zl(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Vl=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Hl=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${zl(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Ul=(e,t,n,r,i,a)=>{let o=e.dims,s=Nl(a,t.axes,o.length),c=Pl(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=Fl(o,l,t)));let u=G(`output`,e.dataType,c.length),d=W(`input`,e.dataType,o.length),f=L.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${jl(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${Rl(d,o)};
              ${Ml(t.nearestMode,n,g)};
              ${Ll(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${Il(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Bl(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${Hl(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${Vl(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...V(o,c)]})}},Wl=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Gl=(e,t)=>{let n=[],r=[],i=[],a=Wl(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);kl(e.inputs,t,a,n,r,i),e.compute(Ul(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Kl=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return z({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),Jl,Yl,Xl,Zl=u(()=>{F(),R(),K(),Jl=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},Yl=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=L.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=H(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[W(`x`,e[0].dataType,e[0].dims,g),W(`skip`,e[1].dataType,e[1].dims,g),W(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(W(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(W(`bias`,e[4].dataType,e[4].dims,g)),r.push(G(`output`,e[0].dataType,s,g)),p&&r.push(G(`mean_output`,1,u)),m&&r.push(G(`inv_std_output`,1,u)),h&&r.push(G(`input_skip_bias_sum`,e[0].dataType,s,g));let a=On(e[0].dataType),o=On(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${jn(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Mn(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Mn(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},Xl=(e,t)=>{Jl(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Yl(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Ql,$l,eu,tu,nu,ru,iu,au,ou=u(()=>{F(),R(),B(),K(),Ql=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},$l=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`);return n},eu=(e,t)=>{if(e.length>1){let t=$l(e,1),n=$l(e,2),r=$l(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),z({starts:t,ends:n,axes:r})}else return t},tu=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},nu=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${U(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${U(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${U(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${U(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,ru=(e,t)=>{let n=e[0].dims,r=L.size(n),i=t.axes.length>0?L.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=$l(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>tu(e,t,n,i,a)),s=t.ends.map((e,t)=>tu(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t];o[t]=i+r*a[t],s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=G(`output`,e[0].dataType,l.length),f=W(`input`,e[0].dataType,e[0].dims.length),p=L.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...V(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${nu(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},iu=(e,t)=>{Ql(e.inputs,t);let n=eu(e.inputs,t);e.compute(ru(e.inputs,n),{inputs:[0]})},au=e=>{let t=e.starts,n=e.ends,r=e.axes;return z({starts:t,ends:n,axes:r})}}),su,cu,lu,uu,du=u(()=>{F(),R(),B(),qn(),K(),su=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},cu=(e,t)=>{let n=e.inputs[0],r=n.dims,i=L.size(r),a=r.length,o=L.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(Wn(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=H(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=W(`x`,c.dataType,c.dims,p),v=G(`result`,c.dataType,c.dims,p),y=_.type.value,b=On(c.dataType)===`f32`?`var threadMax = ${y}(-3.4028234663852886e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${Mn(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${y}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(Wn(x,l),{inputs:[x]})},lu=(e,t)=>{su(e.inputs),cu(e,t)},uu=e=>z({axis:e.axis})}),fu,pu,mu,hu,gu,_u=u(()=>{F(),R(),K(),fu=e=>Array.from(e.getBigInt64Array(),Number),pu=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(fu(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},mu=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},hu=(e,t)=>{let n=e[0].dims,r=t??fu(e[1]),i=mu(n,r),a=L.size(i),o=e[0].dataType,s=W(`input`,o,n.length),c=G(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...V(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},gu=e=>{pu(e.inputs),e.compute(hu(e.inputs),{inputs:[0]})}}),vu,yu,bu,xu=u(()=>{F(),R(),K(),vu=(e,t,n,r,i)=>{let a=G(`output_data`,i,n.length,4),o=W(`a_data`,t[1].dataType,t[1].dims.length,4),s=W(`b_data`,t[2].dataType,t[2].dims.length,4),c=W(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},yu=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(L.areEqual(t,n)&&L.areEqual(n,r)),o=t,s=L.size(t);if(a){let e=Wt.calcShape(Wt.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=L.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>vu(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...V(r,t,n,o)]})}},bu=e=>{e.compute(yu(e.inputs))}}),Su,Cu=u(()=>{Wr(),$r(),ii(),ci(),ra(),_a(),wa(),vo(),Ao(),Po(),Bo(),Qo(),is(),ss(),fs(),gs(),xs(),Es(),js(),Ks(),vc(),Cc(),Dc(),Ac(),Ic(),ec(),Kc(),fl(),_l(),xl(),El(),zr(),ql(),fc(),Zl(),ou(),du(),cc(),_u(),qn(),$i(),xu(),Su=new Map([[`Abs`,[ui]],[`Acos`,[di]],[`Acosh`,[fi]],[`Add`,[sa]],[`ArgMax`,[Hr,Ur]],[`ArgMin`,[Vr,Ur]],[`Asin`,[pi]],[`Asinh`,[mi]],[`Atan`,[hi]],[`Atanh`,[gi]],[`Attention`,[Qr]],[`AveragePool`,[rl,nl]],[`BatchNormalization`,[ri]],[`BiasAdd`,[si]],[`BiasSplitGelu`,[na]],[`Cast`,[vi,_i]],[`Ceil`,[xi]],[`Clip`,[bi]],[`Concat`,[Sa,Ca]],[`Conv`,[_o,po]],[`ConvTranspose`,[ko,To]],[`Cos`,[Si]],[`Cosh`,[Ci]],[`CumSum`,[Mo,No]],[`DepthToSpace`,[Ro,zo]],[`DequantizeLinear`,[hl,gl]],[`Div`,[ca]],[`Einsum`,[Xo,Zo]],[`Elu`,[Ti,wi]],[`Equal`,[la]],[`Erf`,[Di]],[`Exp`,[Oi]],[`Expand`,[rs]],[`FastGelu`,[os]],[`Floor`,[ki]],[`FusedConv`,[_o,po]],[`Gather`,[ds,us]],[`GatherElements`,[Ts,ws]],[`GatherBlockQuantized`,[ys,bs]],[`GatherND`,[ms,hs]],[`Gelu`,[Ai]],[`Gemm`,[As,ks]],[`GlobalAveragePool`,[ol,al]],[`GlobalMaxPool`,[dl,ul]],[`Greater`,[pa]],[`GreaterOrEqual`,[ha]],[`GridSample`,[Ws,Gs]],[`GroupQueryAttention`,[_c]],[`HardSigmoid`,[Ri,Li]],[`InstanceNormalization`,[Sc]],[`LayerNormalization`,[Ec]],[`LeakyRelu`,[ji,wi]],[`Less`,[ma]],[`LessOrEqual`,[ga]],[`Log`,[Yi]],[`MatMul`,[kc]],[`MatMulNBits`,[Pc,Fc]],[`MaxPool`,[cl,ll]],[`Mul`,[ua]],[`MultiHeadAttention`,[$s,Ys]],[`Neg`,[Ni]],[`Not`,[Mi]],[`Pad`,[Gc]],[`Pow`,[da]],[`QuickGelu`,[Qi,wi]],[`Range`,[bl]],[`Reciprocal`,[Pi]],[`ReduceMin`,[Pr]],[`ReduceMean`,[kr]],[`ReduceMax`,[Nr]],[`ReduceSum`,[Ir]],[`ReduceProd`,[Fr]],[`ReduceL1`,[Ar]],[`ReduceL2`,[jr]],[`ReduceLogSum`,[Rr]],[`ReduceLogSumExp`,[Mr]],[`ReduceSumSquare`,[Lr]],[`Relu`,[Fi]],[`Resize`,[Gl,Kl]],[`RotaryEmbedding`,[dc]],[`ScatterND`,[Tl,wl]],[`Sigmoid`,[Ii]],[`Sin`,[zi]],[`Sinh`,[Bi]],[`Slice`,[iu,au]],[`SkipLayerNormalization`,[Xl]],[`Split`,[oc,sc]],[`Sqrt`,[Vi]],[`Softmax`,[lu,uu]],[`Sub`,[fa]],[`Tan`,[Hi]],[`Tanh`,[Wi]],[`ThresholdedRelu`,[Ji,wi]],[`Tile`,[gu]],[`Transpose`,[Gn,Kn]],[`Where`,[bu]]])}),wu,Tu=u(()=>{Ne(),Ht(),K(),wu=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){be(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),xe(e.programInfo.name)}dispose(){}build(e,t){be(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=Ln(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});I(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return xe(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}else return[o,o,1]}}}),Eu={};d(Eu,{WebGpuBackend:()=>Au});var Du,Ou,ku,Au,ju=u(()=>{Ne(),F(),Ht(),Xt(),wn(),Cu(),Tu(),Du=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},Ou=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${Du(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},ku=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Au=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`),this.device=await t.requestDevice(r),this.adapterInfo=new ku(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Cn(this),this.programManager=new wu(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Bt(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,`device`,{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,`adapter`,{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;be(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:Dt(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:Dt(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Dt(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Dt(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}start time: ${p} ns, execution time: ${m-p} ns`)}j(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),xe()}run(e,t,n,r,i,a){be(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return xe(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${Dt(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=Ou(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),I(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(I(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),xe(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Su.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),I(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await xn(this,e,t);return Yt(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode===`default`||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){I(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){I(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){I(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Mu={};d(Mu,{init:()=>Fu});var Nu,Pu,Fu,Iu=u(()=>{F(),Ht(),R(),pn(),Nu=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=L.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=L.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=L.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=L.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(L.size(t)!==L.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},Pu=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new Nu(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new Nu(this.module,t,this.output(e,n),n),(e,t)=>{let n=Ot(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new Nu(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},Fu=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=(ju(),p(Eu)).WebGpuBackend,a=new e;await a.initialize(n,r),i(`webgpu`,[a,e=>a.alloc(Number(e)),e=>a.free(e),(e,n,r,i=!1)=>{if(i)I(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(e)}, dst=${Number(n)}, size=${Number(r)}`),a.memcpy(Number(e),Number(n));else{I(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(e)}, gpuDataId=${Number(n)}, size=${Number(r)}`);let i=t.HEAPU8.subarray(Number(e>>>0),Number(e>>>0)+Number(r));a.upload(Number(n),i)}},async(e,n,r)=>{I(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${e}, dataOffset=${n}, size=${r}`),await a.download(Number(e),()=>t.HEAPU8.subarray(Number(n)>>>0,Number(n+r)>>>0))},(e,n,r)=>a.createKernel(e,Number(n),r,t.UTF8ToString(t._JsepGetNodeName(Number(n)))),e=>a.releaseKernel(e),(e,n,r,i)=>{I(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${r}, kernel=${e}, contextDataOffset=${n}`);let o=new Pu(t,a,Number(n));return a.computeKernel(Number(e),o,i)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let e=new fn(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n),(t,n)=>e.registerMLContext(t,n),!!n.trace])}}}),Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu=u(()=>{Ne(),vt(),Tt(),F(),pt(),gt(),Ft(),Lu=(e,t)=>{N()._OrtInit(e,t)!==0&&P(`Can't initialize onnxruntime.`)},Ru=async e=>{Lu(e.wasm.numThreads,At(e.logLevel))},zu=async(e,t)=>{N().asyncInit?.();let n=e.webgpu.adapter;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);if(n){if(typeof n.limits!=`object`||typeof n.features!=`object`||typeof n.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let t=e.webgpu.powerPreference;if(t!==void 0&&t!==`low-power`&&t!==`high-performance`)throw Error(`Invalid powerPreference setting: "${t}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:t,forceFallbackAdapter:r}),!n)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}}if(t===`webnn`&&(typeof navigator>`u`||!navigator.ml))throw Error(`WebNN is not supported in current environment`);{let r=(Iu(),p(Mu)).init;t===`webgpu`&&await r(`webgpu`,N(),e,n),t===`webnn`&&await r(`webnn`,N(),e)}},Bu=new Map,Vu=e=>{let t=N(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&P(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},Hu=(e,t)=>{let n=N(),r=n.stackSave(),i=0;try{let r=n.PTR_SIZE,a=n.stackAlloc(2*r);n._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&P(`Can't get session input/output metadata.`);let o=Number(n.getValue(a,`*`));i=Number(n.getValue(a+r,`*`));let s=n.HEAP32[i/4];if(s===0)return[o,0];let c=n.HEAPU32[i/4+1],l=[];for(let e=0;e<c;e++){let t=Number(n.getValue(i+8+e*r,`*`));l.push(t===0?Number(n.getValue(i+8+(e+c)*r,`*`)):n.UTF8ToString(t))}return[o,s,l]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Uu=e=>{let t=N(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Wu=async(e,t)=>{let n,r,i=N();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Uu(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=await wt(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(Pt(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;n?i.currentContext=n:r?i.currentContext=await i.webnnCreateMLContext(r):i.currentContext=await i.webnnCreateMLContext({deviceType:a,powerPreference:o})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),i.webgpuOnCreateSession?.(a),a===0&&P(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=Vu(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[],g=[],_=[];for(let t=0;t<e;t++){let[e,n,r]=Hu(a,t);e===0&&P(`Can't get an input name.`),l.push(e);let o=i.UTF8ToString(e);p.push(o),h.push(n===0?{name:o,isTensor:!1}:{name:o,isTensor:!0,type:Dt(n),shape:r})}for(let n=0;n<d;n++){let[r,o,s]=Hu(a,n+e);r===0&&P(`Can't get an output name.`),u.push(r);let c=i.UTF8ToString(r);m.push(c),g.push(o===0?{name:c,isTensor:!1}:{name:c,isTensor:!0,type:Dt(o),shape:s});{if(f&&t?.preferredOutputLocation===void 0){_.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[c]??`cpu`,n=i.webnnIsGraphOutput;if(e===`cpu`&&n&&n(a,c)){_.push(`ml-tensor-cpu-output`);continue}if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(e)}}let v=null;return _.some(e=>e===`gpu-buffer`||e===`ml-tensor`||e===`ml-tensor-cpu-output`)&&(s=i._OrtCreateBinding(a),s===0&&P(`Can't create IO binding.`),v={handle:s,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(e=>e===`ml-tensor-cpu-output`?`ml-tensor`:e).map(e=>Nt(e))}),Bu.set(a,[a,l,u,v,f,!1]),[a,p,m,h,g]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&P(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&P(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&P(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},Gu=e=>{let t=N(),n=Bu.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&P(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&P(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&P(`Can't release session.`),Bu.delete(e)},Ku=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=N(),c=s.PTR_SIZE,l=e[0],u=e[1],d=e[3],f=d,p,m;if(l===`string`&&(d===`gpu-buffer`||d===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(o&&d!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d===`gpu-buffer`){let t=e[2].gpuBuffer;m=Ot(Et(l),u);{let e=s.jsepRegisterBuffer;if(!e)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);p=e(r,a,t,m)}}else if(d===`ml-tensor`){let t=e[2].mlTensor;m=Ot(Et(l),u);let n=s.webnnRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);p=n(r,t,Et(l),u)}else{let t=e[2];if(Array.isArray(t)){m=c*t.length,p=s._malloc(m),n.push(p);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);s.setValue(p+e*c,mt(t[e],n),`*`)}}else{let e=s.webnnIsGraphInput,a=s.webnnIsGraphOutput;if(l!==`string`&&e&&a){let o=s.UTF8ToString(i);if(e(r,o)||a(r,o)){let e=Et(l);m=Ot(e,u),f=`ml-tensor`;let n=s.webnnCreateTemporaryTensor,i=s.webnnUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,u);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),p=a}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}}let h=s.stackSave(),g=s.stackAlloc(4*u.length);try{u.forEach((e,t)=>s.setValue(g+t*c,e,c===4?`i32`:`i64`));let e=s._OrtCreateTensor(Et(l),p,m,g,u.length,Nt(f));e===0&&P(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(e)}finally{s.stackRestore(h)}},qu=async(e,t,n,r,i,a)=>{let o=N(),s=o.PTR_SIZE,c=Bu.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=[],C=o.stackSave(),w=o.stackAlloc(h*s),ee=o.stackAlloc(h*s),T=o.stackAlloc(g*s),E=o.stackAlloc(g*s);try{[_,v]=_t(a),Se(`wasm prepareInputOutputTensor`);for(let r=0;r<h;r++)await Ku(n[r],y,x,e,u[t[r]],t[r],p);for(let t=0;t<g;t++)await Ku(i[t],b,x,e,d[r[t]],h+r[t],p);Ce(`wasm prepareInputOutputTensor`);for(let e=0;e<h;e++)o.setValue(w+e*s,y[e],`*`),o.setValue(ee+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(T+e*s,b[e],`*`),o.setValue(E+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);Se(`wasm bindInputsOutputs`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&P(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?(S.push(b[t]),o._OrtBindOutput(n,d[c],b[t],0)!==0&&P(`Can't bind pre-allocated output[${t}] for session=${e}.`)):o._OrtBindOutput(n,d[c],0,s[c])!==0&&P(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}Ce(`wasm bindInputsOutputs`),Bu.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l),o.webnnOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,T,_):await o._OrtRun(l,ee,w,h,E,g,T,_),c!==0&&P(`failed to call OrtRun().`);let C=[],D=[];Se(`wasm ProcessOutputTensor`);for(let t=0;t<g;t++){let n=Number(o.getValue(T+t*s,`*`));if(n===b[t]||S.includes(b[t])){C.push(i[t]),n!==b[t]&&o._OrtReleaseTensor(n)!==0&&P(`Can't release tensor.`);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),l=!1,u,d=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&P(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));d=o.getValue(c+s,`*`);let p=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(p+e*s,i)));o._OrtFree(p)!==0&&P(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);u=Dt(a);let _=f?.outputPreferredLocations[r[t]];if(u===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(d+t*s,`*`),r=o.getValue(d+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}C.push([u,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(d),r=Ot(a,g);if(r===void 0||!jt(u))throw Error(`Unsupported data type: ${u}`);l=!0,C.push([u,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,u),dispose:()=>{o._OrtReleaseTensor(n)!==0&&P(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.webnnEnsureTensor,r=o.webnnIsGraphInputOutputTypeSupported;if(!t||!r)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Ot(a,g)===void 0||!Mt(u))throw Error(`Unsupported data type: ${u}`);if(!r(e,u,!1))throw Error(`preferredLocation "ml-tensor" for ${u} output is not supported by current WebNN Context.`);let i=await t(e,d,a,h,!1);l=!0,C.push([u,h,{mlTensor:i,download:o.webnnCreateMLTensorDownloader(d,u),dispose:()=>{o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n)}},`ml-tensor`])}else if(_===`ml-tensor-cpu-output`&&g>0){let e=o.webnnCreateMLTensorDownloader(d,u)(),t=C.length;l=!0,D.push((async()=>{let r=[t,await e];return o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n),r})()),C.push([u,h,[],`cpu`])}else{let e=new(kt(u))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(d,d+e.byteLength)),C.push([u,h,e,`cpu`])}}finally{o.stackRestore(a),u===`string`&&d&&o._free(d),l||o._OrtReleaseTensor(n)}}f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&P(`Can't clear bound outputs.`),Bu.set(e,[l,u,d,f,p,!1]));for(let[e,t]of await Promise.all(D))C[e][2]=t;return Ce(`wasm ProcessOutputTensor`),C}finally{o.webnnOnRunEnd?.(l),o.stackRestore(C),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},Ju=e=>{let t=N(),n=Bu.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&P(`Can't get an profile file name.`),t._OrtFree(i)},Yu=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd=u(()=>{Ne(),Xu(),pt(),it(),Zu=()=>!!T.wasm.proxy&&typeof document<`u`,$u=!1,ed=!1,td=!1,id=new Map,ad=(e,t)=>{let n=id.get(e);n?n.push(t):id.set(e,[t])},od=()=>{if($u||!ed||td||!Qu)throw Error(`worker not ready`)},sd=e=>{switch(e.data.type){case`init-wasm`:$u=!1,e.data.err?(td=!0,rd[1](e.data.err)):(ed=!0,rd[0]()),nd&&=(URL.revokeObjectURL(nd),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=id.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},cd=async()=>{if(!ed){if($u)throw Error(`multiple calls to 'initWasm()' detected.`);if(td)throw Error(`previous call to 'initWasm()' failed.`);if($u=!0,Zu())return new Promise((e,t)=>{Qu?.terminate(),tt().then(([n,r])=>{try{Qu=r,Qu.onerror=e=>t(e),Qu.onmessage=sd,rd=[e,t];let i={type:`init-wasm`,in:T};!i.in.wasm.wasmPaths&&(n||Ke)&&(i.in.wasm.wasmPaths={wasm:new URL(`/equipment-rotation/assets/ort-wasm-simd-threaded.jsep-C887KxcQ.wasm`,``+import.meta.url).href}),Qu.postMessage(i),nd=n}catch(e){t(e)}},t)});try{await ft(T.wasm),await Ru(T),ed=!0}catch(e){throw td=!0,e}finally{$u=!1}}},ld=async e=>{if(Zu())return od(),new Promise((t,n)=>{ad(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:T}};Qu.postMessage(r)});await zu(T,e)},ud=async e=>Zu()?(od(),new Promise((t,n)=>{ad(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};Qu.postMessage(r,[e.buffer])})):Uu(e),dd=async(e,t)=>{if(Zu()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return od(),new Promise((n,r)=>{ad(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Qu.postMessage(i,a)})}else return Wu(e,t)},fd=async e=>{if(Zu())return od(),new Promise((t,n)=>{ad(`release`,[t,n]);let r={type:`release`,in:e};Qu.postMessage(r)});Gu(e)},pd=async(e,t,n,r,i,a)=>{if(Zu()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return od(),new Promise((i,o)=>{ad(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};Qu.postMessage(c,Yu(s))})}else return qu(e,t,n,r,i,a)},md=async e=>{if(Zu())return od(),new Promise((t,n)=>{ad(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};Qu.postMessage(r)});Ju(e)}}),gd,_d,vd,yd=u(()=>{Ne(),hd(),F(),Pe(),Ft(),gd=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},_d=e=>{switch(e[3]){case`cpu`:return new _e(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!jt(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return _e.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Mt(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return _e.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},vd=class{async fetchModelAndCopyToWasmMemory(e){return ud(await Pt(e))}async loadModel(e,t){be();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await dd(n,t),xe()}async dispose(){return fd(this.sessionId)}async run(e,t,n){be();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>gd(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?gd(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await pd(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??_d(l[e]);return xe(),u}startProfiling(){}endProfiling(){md(this.sessionId)}}}),bd={};d(bd,{OnnxruntimeWebAssemblyBackend:()=>Sd,initializeFlags:()=>xd,wasmBackend:()=>Cd});var xd,Sd,Cd,wd=u(()=>{Ne(),hd(),yd(),xd=()=>{(typeof T.wasm.initTimeout!=`number`||T.wasm.initTimeout<0)&&(T.wasm.initTimeout=0);let e=T.wasm.simd;if(typeof e!=`boolean`&&e!==void 0&&e!==`fixed`&&e!==`relaxed`&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),T.wasm.simd=!1),typeof T.wasm.proxy!=`boolean`&&(T.wasm.proxy=!1),typeof T.wasm.trace!=`boolean`&&(T.wasm.trace=!1),typeof T.wasm.numThreads!=`number`||!Number.isInteger(T.wasm.numThreads)||T.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)T.wasm.numThreads=1;else{let e=typeof navigator>`u`?l(`node:os`).cpus().length:navigator.hardwareConcurrency;T.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Sd=class{async init(e){xd(),await cd(),await ld(e)}async createInferenceSessionHandler(e,t){let n=new vd;return await n.loadModel(e,t),n}},Cd=new Sd});Ne(),Ne(),Ne();var Td=`1.24.3`;{let e=(wd(),p(bd)).wasmBackend;g(`webgpu`,e,5),g(`webnn`,e,5),g(`cpu`,e,10),g(`wasm`,e,10)}Object.defineProperty(T.versions,`web`,{value:Td,enumerable:!0});var Ed=typeof self<`u`?self:global,Dd=typeof navigator<`u`,Od=Dd&&typeof HTMLImageElement>`u`,kd=!(typeof global>`u`||typeof process>`u`||!process.versions||!process.versions.node),Ad=Ed.Buffer,jd=Ed.BigInt,Md=!!Ad,Nd=e=>e;function Pd(t,n=Nd){if(kd)try{return typeof e==`function`?Promise.resolve(n(e(t))):i(()=>import(t).then(n),[])}catch{console.warn(`Couldn't load ${t}`)}}var Fd=Ed.fetch,Id=e=>Fd=e;if(!Ed.fetch){let e=Pd(`http`,(e=>e)),t=Pd(`https`,(e=>e)),n=(r,{headers:i}={})=>new Promise((async(a,o)=>{let{port:s,hostname:c,pathname:l,protocol:u,search:d}=new URL(r),f={method:`GET`,hostname:c,path:encodeURI(l)+d,headers:i};s!==``&&(f.port=Number(s));let p=(u===`https:`?await t:await e).request(f,(e=>{if(e.statusCode===301||e.statusCode===302)return n(new URL(e.headers.location,r).toString(),{headers:i}).then(a).catch(o);a({status:e.statusCode,arrayBuffer:()=>new Promise((t=>{let n=[];e.on(`data`,(e=>n.push(e))),e.on(`end`,(()=>t(Buffer.concat(n))))}))})}));p.on(`error`,o),p.end()}));Id(n)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ld=e=>zd(e)?void 0:e,Rd=e=>e!==void 0;function zd(e){return e===void 0||(e instanceof Map?e.size===0:Object.values(e).filter(Rd).length===0)}function Bd(e){let t=Error(e);throw delete t.stack,t}function Vd(e){return(e=function(e){for(;e.endsWith(`\0`);)e=e.slice(0,-1);return e}(e).trim())===``?void 0:e}function Hd(e){let t=function(e){let t=0;return e.ifd0.enabled&&(t+=1024),e.exif.enabled&&(t+=2048),e.makerNote&&(t+=2048),e.userComment&&(t+=1024),e.gps.enabled&&(t+=512),e.interop.enabled&&(t+=100),e.ifd1.enabled&&(t+=1024),t+2048}(e);return e.jfif.enabled&&(t+=50),e.xmp.enabled&&(t+=2e4),e.iptc.enabled&&(t+=14e3),e.icc.enabled&&(t+=6e3),t}var Ud=e=>String.fromCharCode.apply(null,e),Wd=typeof TextDecoder<`u`?new TextDecoder(`utf-8`):void 0;function Gd(e){return Wd?Wd.decode(e):Md?Buffer.from(e).toString(`utf8`):decodeURIComponent(escape(Ud(e)))}var Kd=class e{static from(t,n){return t instanceof this&&t.le===n?t:new e(t,void 0,void 0,n)}constructor(t,n=0,r,i){if(typeof i==`boolean`&&(this.le=i),Array.isArray(t)&&(t=new Uint8Array(t)),t===0)this.byteOffset=0,this.byteLength=0;else if(t instanceof ArrayBuffer){r===void 0&&(r=t.byteLength-n);let e=new DataView(t,n,r);this._swapDataView(e)}else if(t instanceof Uint8Array||t instanceof DataView||t instanceof e){r===void 0&&(r=t.byteLength-n),(n+=t.byteOffset)+r>t.byteOffset+t.byteLength&&Bd(`Creating view outside of available memory in ArrayBuffer`);let e=new DataView(t.buffer,n,r);this._swapDataView(e)}else if(typeof t==`number`){let e=new DataView(new ArrayBuffer(t));this._swapDataView(e)}else Bd(`Invalid input argument for BufferView: `+t)}_swapArrayBuffer(e){this._swapDataView(new DataView(e))}_swapBuffer(e){this._swapDataView(new DataView(e.buffer,e.byteOffset,e.byteLength))}_swapDataView(e){this.dataView=e,this.buffer=e.buffer,this.byteOffset=e.byteOffset,this.byteLength=e.byteLength}_lengthToEnd(e){return this.byteLength-e}set(t,n,r=e){return t instanceof DataView||t instanceof e?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t instanceof ArrayBuffer&&(t=new Uint8Array(t)),t instanceof Uint8Array||Bd(`BufferView.set(): Invalid data argument.`),this.toUint8().set(t,n),new r(this,n,t.byteLength)}subarray(t,n){return n||=this._lengthToEnd(t),new e(this,t,n)}toUint8(){return new Uint8Array(this.buffer,this.byteOffset,this.byteLength)}getUint8Array(e,t){return new Uint8Array(this.buffer,this.byteOffset+e,t)}getString(e=0,t=this.byteLength){return Gd(this.getUint8Array(e,t))}getLatin1String(e=0,t=this.byteLength){return Ud(this.getUint8Array(e,t))}getUnicodeString(e=0,t=this.byteLength){let n=[];for(let r=0;r<t&&e+r<this.byteLength;r+=2)n.push(this.getUint16(e+r));return Ud(n)}getInt8(e){return this.dataView.getInt8(e)}getUint8(e){return this.dataView.getUint8(e)}getInt16(e,t=this.le){return this.dataView.getInt16(e,t)}getInt32(e,t=this.le){return this.dataView.getInt32(e,t)}getUint16(e,t=this.le){return this.dataView.getUint16(e,t)}getUint32(e,t=this.le){return this.dataView.getUint32(e,t)}getFloat32(e,t=this.le){return this.dataView.getFloat32(e,t)}getFloat64(e,t=this.le){return this.dataView.getFloat64(e,t)}getFloat(e,t=this.le){return this.dataView.getFloat32(e,t)}getDouble(e,t=this.le){return this.dataView.getFloat64(e,t)}getUintBytes(e,t,n){switch(t){case 1:return this.getUint8(e,n);case 2:return this.getUint16(e,n);case 4:return this.getUint32(e,n);case 8:return this.getUint64&&this.getUint64(e,n)}}getUint(e,t,n){switch(t){case 8:return this.getUint8(e,n);case 16:return this.getUint16(e,n);case 32:return this.getUint32(e,n);case 64:return this.getUint64&&this.getUint64(e,n)}}toString(e){return this.dataView.toString(e,this.constructor.name)}ensureChunk(){}};function qd(e,t){Bd(`${e} '${t}' was not loaded, try using full build of exifr.`)}var Jd=class extends Map{constructor(e){super(),this.kind=e}get(e,t){return this.has(e)||qd(this.kind,e),t&&(e in t||function(e,t){Bd(`Unknown ${e} '${t}'.`)}(this.kind,e),t[e].enabled||qd(this.kind,e)),super.get(e)}keyList(){return Array.from(this.keys())}},Yd=new Jd(`file parser`),Xd=new Jd(`segment parser`),Zd=new Jd(`file reader`);function Qd(e,t){return typeof e==`string`?$d(e,t):Dd&&!Od&&e instanceof HTMLImageElement?$d(e.src,t):e instanceof Uint8Array||e instanceof ArrayBuffer||e instanceof DataView?new Kd(e):Dd&&e instanceof Blob?ef(e,t,`blob`,rf):void Bd(`Invalid input argument`)}function $d(e,t){return(n=e).startsWith(`data:`)||n.length>1e4?tf(e,t,`base64`):kd&&e.includes(`://`)?ef(e,t,`url`,nf):kd?tf(e,t,`fs`):Dd?ef(e,t,`url`,nf):void Bd(`Invalid input argument`);var n}async function ef(e,t,n,r){return Zd.has(n)?tf(e,t,n):r?async function(e,t){return new Kd(await t(e))}(e,r):void Bd(`Parser ${n} is not loaded`)}async function tf(e,t,n){let r=new(Zd.get(n))(e,t);return await r.read(),r}var nf=e=>Fd(e).then((e=>e.arrayBuffer())),rf=e=>new Promise(((t,n)=>{let r=new FileReader;r.onloadend=()=>t(r.result||new ArrayBuffer),r.onerror=n,r.readAsArrayBuffer(e)})),af=class extends Map{get tagKeys(){return this.allKeys||=Array.from(this.keys()),this.allKeys}get tagValues(){return this.allValues||=Array.from(this.values()),this.allValues}};function Q(e,t,n){let r=new af;for(let[e,t]of n)r.set(e,t);if(Array.isArray(t))for(let n of t)e.set(n,r);else e.set(t,r);return r}function of(e,t,n){let r,i=e.get(t);for(r of n)i.set(r[0],r[1])}var sf=new Map,cf=new Map,lf=new Map,uf=[`chunked`,`firstChunkSize`,`firstChunkSizeNode`,`firstChunkSizeBrowser`,`chunkSize`,`chunkLimit`],df=[`jfif`,`xmp`,`icc`,`iptc`,`ihdr`],ff=[`tiff`,...df],$=[`ifd0`,`ifd1`,`exif`,`gps`,`interop`],pf=[...ff,...$],mf=[`makerNote`,`userComment`],hf=[`translateKeys`,`translateValues`,`reviveValues`,`multiSegment`],gf=[...hf,`sanitize`,`mergeOutput`,`silentErrors`],_f=class{get translate(){return this.translateKeys||this.translateValues||this.reviveValues}},vf=class extends _f{get needed(){return this.enabled||this.deps.size>0}constructor(e,t,n,r){if(super(),Z(this,`enabled`,!1),Z(this,`skip`,new Set),Z(this,`pick`,new Set),Z(this,`deps`,new Set),Z(this,`translateKeys`,!1),Z(this,`translateValues`,!1),Z(this,`reviveValues`,!1),this.key=e,this.enabled=t,this.parse=this.enabled,this.applyInheritables(r),this.canBeFiltered=$.includes(e),this.canBeFiltered&&(this.dict=sf.get(e)),n!==void 0)if(Array.isArray(n))this.parse=this.enabled=!0,this.canBeFiltered&&n.length>0&&this.translateTagSet(n,this.pick);else if(typeof n==`object`){if(this.enabled=!0,this.parse=!1!==n.parse,this.canBeFiltered){let{pick:e,skip:t}=n;e&&e.length>0&&this.translateTagSet(e,this.pick),t&&t.length>0&&this.translateTagSet(t,this.skip)}this.applyInheritables(n)}else !0===n||!1===n?this.parse=this.enabled=n:Bd(`Invalid options argument: ${n}`)}applyInheritables(e){let t,n;for(t of hf)n=e[t],n!==void 0&&(this[t]=n)}translateTagSet(e,t){if(this.dict){let n,r,{tagKeys:i,tagValues:a}=this.dict;for(n of e)typeof n==`string`?(r=a.indexOf(n),r===-1&&(r=i.indexOf(Number(n))),r!==-1&&t.add(Number(i[r]))):t.add(n)}else for(let n of e)t.add(n)}finalizeFilters(){!this.enabled&&this.deps.size>0?(this.enabled=!0,wf(this.pick,this.deps)):this.enabled&&this.pick.size>0&&wf(this.pick,this.deps)}},yf={jfif:!1,tiff:!0,xmp:!1,icc:!1,iptc:!1,ifd0:!0,ifd1:!1,exif:!0,gps:!0,interop:!1,ihdr:void 0,makerNote:!1,userComment:!1,multiSegment:!1,skip:[],pick:[],translateKeys:!0,translateValues:!0,reviveValues:!0,sanitize:!0,mergeOutput:!0,silentErrors:!0,chunked:!0,firstChunkSize:void 0,firstChunkSizeNode:512,firstChunkSizeBrowser:65536,chunkSize:65536,chunkLimit:5},bf=new Map,xf=class extends _f{static useCached(e){let t=bf.get(e);return t!==void 0||(t=new this(e),bf.set(e,t)),t}constructor(e){super(),!0===e?this.setupFromTrue():e===void 0?this.setupFromUndefined():Array.isArray(e)?this.setupFromArray(e):typeof e==`object`?this.setupFromObject(e):Bd(`Invalid options argument ${e}`),this.firstChunkSize===void 0&&(this.firstChunkSize=Dd?this.firstChunkSizeBrowser:this.firstChunkSizeNode),this.mergeOutput&&(this.ifd1.enabled=!1),this.filterNestedSegmentTags(),this.traverseTiffDependencyTree(),this.checkLoadedPlugins()}setupFromUndefined(){let e;for(e of uf)this[e]=yf[e];for(e of gf)this[e]=yf[e];for(e of mf)this[e]=yf[e];for(e of pf)this[e]=new vf(e,yf[e],void 0,this)}setupFromTrue(){let e;for(e of uf)this[e]=yf[e];for(e of gf)this[e]=yf[e];for(e of mf)this[e]=!0;for(e of pf)this[e]=new vf(e,!0,void 0,this)}setupFromArray(e){let t;for(t of uf)this[t]=yf[t];for(t of gf)this[t]=yf[t];for(t of mf)this[t]=yf[t];for(t of pf)this[t]=new vf(t,!1,void 0,this);this.setupGlobalFilters(e,void 0,$)}setupFromObject(e){let t;for(t of($.ifd0=$.ifd0||$.image,$.ifd1=$.ifd1||$.thumbnail,Object.assign(this,e),uf))this[t]=Cf(e[t],yf[t]);for(t of gf)this[t]=Cf(e[t],yf[t]);for(t of mf)this[t]=Cf(e[t],yf[t]);for(t of ff)this[t]=new vf(t,yf[t],e[t],this);for(t of $)this[t]=new vf(t,yf[t],e[t],this.tiff);this.setupGlobalFilters(e.pick,e.skip,$,pf),!0===e.tiff?this.batchEnableWithBool($,!0):!1===e.tiff?this.batchEnableWithUserValue($,e):Array.isArray(e.tiff)?this.setupGlobalFilters(e.tiff,void 0,$):typeof e.tiff==`object`&&this.setupGlobalFilters(e.tiff.pick,e.tiff.skip,$)}batchEnableWithBool(e,t){for(let n of e)this[n].enabled=t}batchEnableWithUserValue(e,t){for(let n of e){let e=t[n];this[n].enabled=!1!==e&&e!==void 0}}setupGlobalFilters(e,t,n,r=n){if(e&&e.length){for(let e of r)this[e].enabled=!1;let t=Sf(e,n);for(let[e,n]of t)wf(this[e].pick,n),this[e].enabled=!0}else if(t&&t.length){let e=Sf(t,n);for(let[t,n]of e)wf(this[t].skip,n)}}filterNestedSegmentTags(){let{ifd0:e,exif:t,xmp:n,iptc:r,icc:i}=this;this.makerNote?t.deps.add(37500):t.skip.add(37500),this.userComment?t.deps.add(37510):t.skip.add(37510),n.enabled||e.skip.add(700),r.enabled||e.skip.add(33723),i.enabled||e.skip.add(34675)}traverseTiffDependencyTree(){let{ifd0:e,exif:t,gps:n,interop:r}=this;r.needed&&(t.deps.add(40965),e.deps.add(40965)),t.needed&&e.deps.add(34665),n.needed&&e.deps.add(34853),this.tiff.enabled=$.some((e=>!0===this[e].enabled))||this.makerNote||this.userComment;for(let e of $)this[e].finalizeFilters()}get onlyTiff(){return!df.map((e=>this[e].enabled)).some((e=>!0===e))&&this.tiff.enabled}checkLoadedPlugins(){for(let e of ff)this[e].enabled&&!Xd.has(e)&&qd(`segment parser`,e)}};function Sf(e,t){let n,r,i,a,o=[];for(i of t){for(a of(n=sf.get(i),r=[],n))(e.includes(a[0])||e.includes(a[1]))&&r.push(a[0]);r.length&&o.push([i,r])}return o}function Cf(e,t){return e===void 0?t===void 0?void 0:t:e}function wf(e,t){for(let n of t)e.add(n)}Z(xf,`default`,yf);var Tf=class{constructor(e){Z(this,`parsers`,{}),Z(this,`output`,{}),Z(this,`errors`,[]),Z(this,`pushToErrors`,(e=>this.errors.push(e))),this.options=xf.useCached(e)}async read(e){this.file=await Qd(e,this.options)}setup(){if(this.fileParser)return;let{file:e}=this,t=e.getUint16(0);for(let[n,r]of Yd)if(r.canHandle(e,t))return this.fileParser=new r(this.options,this.file,this.parsers),e[n]=!0;this.file.close&&this.file.close(),Bd(`Unknown file format`)}async parse(){let{output:e,errors:t}=this;return this.setup(),this.options.silentErrors?(await this.executeParsers().catch(this.pushToErrors),t.push(...this.fileParser.errors)):await this.executeParsers(),this.file.close&&this.file.close(),this.options.silentErrors&&t.length>0&&(e.errors=t),Ld(e)}async executeParsers(){let{output:e}=this;await this.fileParser.parse();let t=Object.values(this.parsers).map((async t=>{let n=await t.parse();t.assignToOutput(e,n)}));this.options.silentErrors&&(t=t.map((e=>e.catch(this.pushToErrors)))),await Promise.all(t)}async extractThumbnail(){this.setup();let{options:e,file:t}=this,n=Xd.get(`tiff`,e);var r;if(t.tiff?r={start:0,type:`tiff`}:t.jpeg&&(r=await this.fileParser.getOrFindSegment(`tiff`)),r===void 0)return;let i=await this.fileParser.ensureSegmentChunk(r),a=await(this.parsers.tiff=new n(i,e,t)).extractThumbnail();return t.close&&t.close(),a}};async function Ef(e,t){let n=new Tf(t);return await n.read(e),n.parse()}var Df=Object.freeze({__proto__:null,parse:Ef,Exifr:Tf,fileParsers:Yd,segmentParsers:Xd,fileReaders:Zd,tagKeys:sf,tagValues:cf,tagRevivers:lf,createDictionary:Q,extendDictionary:of,fetchUrlAsArrayBuffer:nf,readBlobAsArrayBuffer:rf,chunkedProps:uf,otherSegments:df,segments:ff,tiffBlocks:$,segmentsAndBlocks:pf,tiffExtractables:mf,inheritables:hf,allFormatters:gf,Options:xf}),Of=class{constructor(e,t,n){Z(this,`errors`,[]),Z(this,`ensureSegmentChunk`,(async e=>{let t=e.start,n=e.size||65536;if(this.file.chunked)if(this.file.available(t,n))e.chunk=this.file.subarray(t,n);else try{e.chunk=await this.file.readChunk(t,n)}catch(t){Bd(`Couldn't read segment: ${JSON.stringify(e)}. ${t.message}`)}else this.file.byteLength>t+n?e.chunk=this.file.subarray(t,n):e.size===void 0?e.chunk=this.file.subarray(t):Bd(`Segment unreachable: `+JSON.stringify(e));return e.chunk})),this.extendOptions&&this.extendOptions(e),this.options=e,this.file=t,this.parsers=n}injectSegment(e,t){this.options[e].enabled&&this.createParser(e,t)}createParser(e,t){let n=new(Xd.get(e))(t,this.options,this.file);return this.parsers[e]=n}createParsers(e){for(let t of e){let{type:e,chunk:n}=t,r=this.options[e];if(r&&r.enabled){let t=this.parsers[e];t&&t.append||t||this.createParser(e,n)}}}async readSegments(e){let t=e.map(this.ensureSegmentChunk);await Promise.all(t)}},kf=class{static findPosition(e,t){let n=e.getUint16(t+2)+2,r=typeof this.headerLength==`function`?this.headerLength(e,t,n):this.headerLength,i=t+r,a=n-r;return{offset:t,length:n,headerLength:r,start:i,size:a,end:i+a}}static parse(e,t={}){return new this(e,new xf({[this.type]:t}),e).parse()}normalizeInput(e){return e instanceof Kd?e:new Kd(e)}constructor(e,t={},n){Z(this,`errors`,[]),Z(this,`raw`,new Map),Z(this,`handleError`,(e=>{if(!this.options.silentErrors)throw e;this.errors.push(e.message)})),this.chunk=this.normalizeInput(e),this.file=n,this.type=this.constructor.type,this.globalOptions=this.options=t,this.localOptions=t[this.type],this.canTranslate=this.localOptions&&this.localOptions.translate}translate(){this.canTranslate&&(this.translated=this.translateBlock(this.raw,this.type))}get output(){return this.translated?this.translated:this.raw?Object.fromEntries(this.raw):void 0}translateBlock(e,t){let n=lf.get(t),r=cf.get(t),i=sf.get(t),a=this.options[t],o=a.reviveValues&&!!n,s=a.translateValues&&!!r,c=a.translateKeys&&!!i,l={};for(let[t,a]of e)o&&n.has(t)?a=n.get(t)(a):s&&r.has(t)&&(a=this.translateValue(a,r.get(t))),c&&i.has(t)&&(t=i.get(t)||t),l[t]=a;return l}translateValue(e,t){return t[e]||t.DEFAULT||e}assignToOutput(e,t){this.assignObjectToOutput(e,this.constructor.type,t)}assignObjectToOutput(e,t,n){if(this.globalOptions.mergeOutput)return Object.assign(e,n);e[t]?Object.assign(e[t],n):e[t]=n}};Z(kf,`headerLength`,4),Z(kf,`type`,void 0),Z(kf,`multiSegment`,!1),Z(kf,`canHandle`,(()=>!1));function Af(e){return e===192||e===194||e===196||e===219||e===221||e===218||e===254}function jf(e){return e>=224&&e<=239}function Mf(e,t,n){for(let[r,i]of Xd)if(i.canHandle(e,t,n))return r}var Nf=class extends Of{constructor(...e){super(...e),Z(this,`appSegments`,[]),Z(this,`jpegSegments`,[]),Z(this,`unknownSegments`,[])}static canHandle(e,t){return t===65496}async parse(){await this.findAppSegments(),await this.readSegments(this.appSegments),this.mergeMultiSegments(),this.createParsers(this.mergedAppSegments||this.appSegments)}setupSegmentFinderArgs(e){!0===e?(this.findAll=!0,this.wanted=new Set(Xd.keyList())):(e=e===void 0?Xd.keyList().filter((e=>this.options[e].enabled)):e.filter((e=>this.options[e].enabled&&Xd.has(e))),this.findAll=!1,this.remaining=new Set(e),this.wanted=new Set(e)),this.unfinishedMultiSegment=!1}async findAppSegments(e=0,t){this.setupSegmentFinderArgs(t);let{file:n,findAll:r,wanted:i,remaining:a}=this;if(!r&&this.file.chunked&&(r=Array.from(i).some((e=>{let t=Xd.get(e),n=this.options[e];return t.multiSegment&&n.multiSegment})),r&&await this.file.readWhole()),e=this.findAppSegmentsInRange(e,n.byteLength),!this.options.onlyTiff&&n.chunked){let t=!1;for(;a.size>0&&!t&&(n.canReadNextChunk||this.unfinishedMultiSegment);){let{nextChunkOffset:r}=n,i=this.appSegments.some((e=>!this.file.available(e.offset||e.start,e.length||e.size)));if(t=e>r&&!i?!await n.readNextChunk(e):!await n.readNextChunk(r),(e=this.findAppSegmentsInRange(e,n.byteLength))===void 0)return}}}findAppSegmentsInRange(e,t){t-=2;let n,r,i,a,o,s,{file:c,findAll:l,wanted:u,remaining:d,options:f}=this;for(;e<t;e++)if(c.getUint8(e)===255){if(n=c.getUint8(e+1),jf(n)){if(r=c.getUint16(e+2),i=Mf(c,e,r),i&&u.has(i)&&(a=Xd.get(i),o=a.findPosition(c,e),s=f[i],o.type=i,this.appSegments.push(o),!l&&(a.multiSegment&&s.multiSegment?(this.unfinishedMultiSegment=o.chunkNumber<o.chunkCount,this.unfinishedMultiSegment||d.delete(i)):d.delete(i),d.size===0)))break;f.recordUnknownSegments&&(o=kf.findPosition(c,e),o.marker=n,this.unknownSegments.push(o)),e+=r+1}else if(Af(n)){if(r=c.getUint16(e+2),n===218&&!1!==f.stopAfterSos)return;f.recordJpegSegments&&this.jpegSegments.push({offset:e,length:r,marker:n}),e+=r+1}}return e}mergeMultiSegments(){this.appSegments.some((e=>e.multiSegment))&&(this.mergedAppSegments=function(e,t){let n,r,i,a=new Map;for(let o=0;o<e.length;o++)n=e[o],r=n[t],a.has(r)?i=a.get(r):a.set(r,i=[]),i.push(n);return Array.from(a)}(this.appSegments,`type`).map((([e,t])=>{let n=Xd.get(e,this.options);return n.handleMultiSegments?{type:e,chunk:n.handleMultiSegments(t)}:t[0]})))}getSegment(e){return this.appSegments.find((t=>t.type===e))}async getOrFindSegment(e){let t=this.getSegment(e);return t===void 0&&(await this.findAppSegments(0,[e]),t=this.getSegment(e)),t}};Z(Nf,`type`,`jpeg`),Yd.set(`jpeg`,Nf);var Pf=[void 0,1,1,2,4,8,1,1,2,4,8,4,8,4],Ff=class extends kf{parseHeader(){var e=this.chunk.getUint16();e===18761?this.le=!0:e===19789&&(this.le=!1),this.chunk.le=this.le,this.headerParsed=!0}parseTags(e,t,n=new Map){let{pick:r,skip:i}=this.options[t];r=new Set(r);let a=r.size>0,o=i.size===0,s=this.chunk.getUint16(e);e+=2;for(let c=0;c<s;c++){let s=this.chunk.getUint16(e);if(a){if(r.has(s)&&(n.set(s,this.parseTag(e,s,t)),r.delete(s),r.size===0))break}else !o&&i.has(s)||n.set(s,this.parseTag(e,s,t));e+=12}return n}parseTag(e,t,n){let{chunk:r}=this,i=r.getUint16(e+2),a=r.getUint32(e+4),o=Pf[i];if(o*a<=4?e+=8:e=r.getUint32(e+8),(i<1||i>13)&&Bd(`Invalid TIFF value type. block: ${n.toUpperCase()}, tag: ${t.toString(16)}, type: ${i}, offset ${e}`),e>r.byteLength&&Bd(`Invalid TIFF value offset. block: ${n.toUpperCase()}, tag: ${t.toString(16)}, type: ${i}, offset ${e} is outside of chunk size ${r.byteLength}`),i===1)return r.getUint8Array(e,a);if(i===2)return Vd(r.getString(e,a));if(i===7)return r.getUint8Array(e,a);if(a===1)return this.parseTagValue(i,e);{let t=new(function(e){switch(e){case 1:return Uint8Array;case 3:return Uint16Array;case 4:return Uint32Array;case 5:return Array;case 6:return Int8Array;case 8:return Int16Array;case 9:return Int32Array;case 10:return Array;case 11:return Float32Array;case 12:return Float64Array;default:return Array}}(i))(a),n=o;for(let r=0;r<a;r++)t[r]=this.parseTagValue(i,e),e+=n;return t}}parseTagValue(e,t){let{chunk:n}=this;switch(e){case 1:return n.getUint8(t);case 3:return n.getUint16(t);case 4:return n.getUint32(t);case 5:return n.getUint32(t)/n.getUint32(t+4);case 6:return n.getInt8(t);case 8:return n.getInt16(t);case 9:return n.getInt32(t);case 10:return n.getInt32(t)/n.getInt32(t+4);case 11:return n.getFloat(t);case 12:return n.getDouble(t);case 13:return n.getUint32(t);default:Bd(`Invalid tiff type ${e}`)}}},If=class extends Ff{static canHandle(e,t){return e.getUint8(t+1)===225&&e.getUint32(t+4)===1165519206&&e.getUint16(t+8)===0}async parse(){this.parseHeader();let{options:e}=this;return e.ifd0.enabled&&await this.parseIfd0Block(),e.exif.enabled&&await this.safeParse(`parseExifBlock`),e.gps.enabled&&await this.safeParse(`parseGpsBlock`),e.interop.enabled&&await this.safeParse(`parseInteropBlock`),e.ifd1.enabled&&await this.safeParse(`parseThumbnailBlock`),this.createOutput()}safeParse(e){let t=this[e]();return t.catch!==void 0&&(t=t.catch(this.handleError)),t}findIfd0Offset(){this.ifd0Offset===void 0&&(this.ifd0Offset=this.chunk.getUint32(4))}findIfd1Offset(){if(this.ifd1Offset===void 0){this.findIfd0Offset();let e=this.chunk.getUint16(this.ifd0Offset),t=this.ifd0Offset+2+12*e;this.ifd1Offset=this.chunk.getUint32(t)}}parseBlock(e,t){let n=new Map;return this[t]=n,this.parseTags(e,t,n),n}async parseIfd0Block(){if(this.ifd0)return;let{file:e}=this;this.findIfd0Offset(),this.ifd0Offset<8&&Bd(`Malformed EXIF data`),!e.chunked&&this.ifd0Offset>e.byteLength&&Bd(`IFD0 offset points to outside of file.\nthis.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`),e.tiff&&await e.ensureChunk(this.ifd0Offset,Hd(this.options));let t=this.parseBlock(this.ifd0Offset,`ifd0`);return t.size===0?void 0:(this.exifOffset=t.get(34665),this.interopOffset=t.get(40965),this.gpsOffset=t.get(34853),this.xmp=t.get(700),this.iptc=t.get(33723),this.icc=t.get(34675),this.options.sanitize&&(t.delete(34665),t.delete(40965),t.delete(34853),t.delete(700),t.delete(33723),t.delete(34675)),t)}async parseExifBlock(){if(this.exif||(this.ifd0||await this.parseIfd0Block(),this.exifOffset===void 0))return;this.file.tiff&&await this.file.ensureChunk(this.exifOffset,Hd(this.options));let e=this.parseBlock(this.exifOffset,`exif`);return this.interopOffset||=e.get(40965),this.makerNote=e.get(37500),this.userComment=e.get(37510),this.options.sanitize&&(e.delete(40965),e.delete(37500),e.delete(37510)),this.unpack(e,41728),this.unpack(e,41729),e}unpack(e,t){let n=e.get(t);n&&n.length===1&&e.set(t,n[0])}async parseGpsBlock(){if(this.gps||(this.ifd0||await this.parseIfd0Block(),this.gpsOffset===void 0))return;let e=this.parseBlock(this.gpsOffset,`gps`);return e&&e.has(2)&&e.has(4)&&(e.set(`latitude`,Lf(...e.get(2),e.get(1))),e.set(`longitude`,Lf(...e.get(4),e.get(3)))),e}async parseInteropBlock(){if(!this.interop&&(this.ifd0||await this.parseIfd0Block(),this.interopOffset!==void 0||this.exif||await this.parseExifBlock(),this.interopOffset!==void 0))return this.parseBlock(this.interopOffset,`interop`)}async parseThumbnailBlock(e=!1){if(!this.ifd1&&!this.ifd1Parsed&&(!this.options.mergeOutput||e))return this.findIfd1Offset(),this.ifd1Offset>0&&(this.parseBlock(this.ifd1Offset,`ifd1`),this.ifd1Parsed=!0),this.ifd1}async extractThumbnail(){if(this.headerParsed||this.parseHeader(),this.ifd1Parsed||await this.parseThumbnailBlock(!0),this.ifd1===void 0)return;let e=this.ifd1.get(513),t=this.ifd1.get(514);return this.chunk.getUint8Array(e,t)}get image(){return this.ifd0}get thumbnail(){return this.ifd1}createOutput(){let e,t,n,r={};for(t of $)if(e=this[t],!zd(e))if(n=this.canTranslate?this.translateBlock(e,t):Object.fromEntries(e),this.options.mergeOutput){if(t===`ifd1`)continue;Object.assign(r,n)}else r[t]=n;return this.makerNote&&(r.makerNote=this.makerNote),this.userComment&&(r.userComment=this.userComment),r}assignToOutput(e,t){if(this.globalOptions.mergeOutput)Object.assign(e,t);else for(let[n,r]of Object.entries(t))this.assignObjectToOutput(e,n,r)}};function Lf(e,t,n,r){var i=e+t/60+n/3600;return r!==`S`&&r!==`W`||(i*=-1),i}Z(If,`type`,`tiff`),Z(If,`headerLength`,10),Xd.set(`tiff`,If);var Rf=Object.freeze({__proto__:null,default:Df,Exifr:Tf,fileParsers:Yd,segmentParsers:Xd,fileReaders:Zd,tagKeys:sf,tagValues:cf,tagRevivers:lf,createDictionary:Q,extendDictionary:of,fetchUrlAsArrayBuffer:nf,readBlobAsArrayBuffer:rf,chunkedProps:uf,otherSegments:df,segments:ff,tiffBlocks:$,segmentsAndBlocks:pf,tiffExtractables:mf,inheritables:hf,allFormatters:gf,Options:xf,parse:Ef}),zf={ifd0:!1,ifd1:!1,exif:!1,gps:!1,interop:!1,sanitize:!1,reviveValues:!0,translateKeys:!1,translateValues:!1,mergeOutput:!1},Bf=Object.assign({},zf,{firstChunkSize:4e4,gps:[1,2,3,4]});async function Vf(e){let t=new Tf(Bf);await t.read(e);let n=await t.parse();if(n&&n.gps){let{latitude:e,longitude:t}=n.gps;return{latitude:e,longitude:t}}}var Hf=Object.assign({},zf,{tiff:!1,ifd1:!0,mergeOutput:!1});async function Uf(e){let t=new Tf(Hf);await t.read(e);let n=await t.extractThumbnail();return n&&Md?Ad.from(n):n}async function Wf(e){let t=await this.thumbnail(e);if(t!==void 0){let e=new Blob([t]);return URL.createObjectURL(e)}}var Gf=Object.assign({},zf,{firstChunkSize:4e4,ifd0:[274]});async function Kf(e){let t=new Tf(Gf);await t.read(e);let n=await t.parse();if(n&&n.ifd0)return n.ifd0[274]}var qf=Object.freeze({1:{dimensionSwapped:!1,scaleX:1,scaleY:1,deg:0,rad:0},2:{dimensionSwapped:!1,scaleX:-1,scaleY:1,deg:0,rad:0},3:{dimensionSwapped:!1,scaleX:1,scaleY:1,deg:180,rad:180*Math.PI/180},4:{dimensionSwapped:!1,scaleX:-1,scaleY:1,deg:180,rad:180*Math.PI/180},5:{dimensionSwapped:!0,scaleX:1,scaleY:-1,deg:90,rad:90*Math.PI/180},6:{dimensionSwapped:!0,scaleX:1,scaleY:1,deg:90,rad:90*Math.PI/180},7:{dimensionSwapped:!0,scaleX:1,scaleY:-1,deg:270,rad:270*Math.PI/180},8:{dimensionSwapped:!0,scaleX:1,scaleY:1,deg:270,rad:270*Math.PI/180}}),Jf=!0,Yf=!0;if(typeof navigator==`object`){let e=navigator.userAgent;if(e.includes(`iPad`)||e.includes(`iPhone`)){let t=e.match(/OS (\d+)_(\d+)/);if(t){let[,e,n]=t;Jf=Number(e)+.1*Number(n)<13.4,Yf=!1}}else if(e.includes(`OS X 10`)){let[,t]=e.match(/OS X 10[_.](\d+)/);Jf=Yf=Number(t)<15}if(e.includes(`Chrome/`)){let[,t]=e.match(/Chrome\/(\d+)/);Jf=Yf=Number(t)<81}else if(e.includes(`Firefox/`)){let[,t]=e.match(/Firefox\/(\d+)/);Jf=Yf=Number(t)<77}}async function Xf(e){let t=await Kf(e);return Object.assign({canvas:Jf,css:Yf},qf[t])}var Zf=class extends Kd{constructor(...e){super(...e),Z(this,`ranges`,new Qf),this.byteLength!==0&&this.ranges.add(0,this.byteLength)}_tryExtend(e,t,n){if(e===0&&this.byteLength===0&&n){let e=new DataView(n.buffer||n,n.byteOffset,n.byteLength);this._swapDataView(e)}else{let n=e+t;if(n>this.byteLength){let{dataView:e}=this._extend(n);this._swapDataView(e)}}}_extend(e){let t;t=Md?Ad.allocUnsafe(e):new Uint8Array(e);let n=new DataView(t.buffer,t.byteOffset,t.byteLength);return t.set(new Uint8Array(this.buffer,this.byteOffset,this.byteLength),0),{uintView:t,dataView:n}}subarray(e,t,n=!1){return t||=this._lengthToEnd(e),n&&this._tryExtend(e,t),this.ranges.add(e,t),super.subarray(e,t)}set(e,t,n=!1){n&&this._tryExtend(t,e.byteLength,e);let r=super.set(e,t);return this.ranges.add(t,r.byteLength),r}async ensureChunk(e,t){this.chunked&&(this.ranges.available(e,t)||await this.readChunk(e,t))}available(e,t){return this.ranges.available(e,t)}},Qf=class{constructor(){Z(this,`list`,[])}get length(){return this.list.length}add(e,t,n=0){let r=e+t,i=this.list.filter((t=>$f(e,t.offset,r)||$f(e,t.end,r)));if(i.length>0){e=Math.min(e,...i.map((e=>e.offset))),r=Math.max(r,...i.map((e=>e.end))),t=r-e;let n=i.shift();n.offset=e,n.length=t,n.end=r,this.list=this.list.filter((e=>!i.includes(e)))}else this.list.push({offset:e,length:t,end:r})}available(e,t){let n=e+t;return this.list.some((t=>t.offset<=e&&n<=t.end))}};function $f(e,t,n){return e<=t&&t<=n}var ep=class extends Zf{constructor(e,t){super(0),Z(this,`chunksRead`,0),this.input=e,this.options=t}async readWhole(){this.chunked=!1,await this.readChunk(this.nextChunkOffset)}async readChunked(){this.chunked=!0,await this.readChunk(0,this.options.firstChunkSize)}async readNextChunk(e=this.nextChunkOffset){if(this.fullyRead)return this.chunksRead++,!1;let t=this.options.chunkSize,n=await this.readChunk(e,t);return!!n&&n.byteLength===t}async readChunk(e,t){if(this.chunksRead++,(t=this.safeWrapAddress(e,t))!==0)return this._readChunk(e,t)}safeWrapAddress(e,t){return this.size!==void 0&&e+t>this.size?Math.max(0,this.size-e):t}get nextChunkOffset(){if(this.ranges.list.length!==0)return this.ranges.list[0].length}get canReadNextChunk(){return this.chunksRead<this.options.chunkLimit}get fullyRead(){return this.size!==void 0&&this.nextChunkOffset===this.size}read(){return this.options.chunked?this.readChunked():this.readWhole()}close(){}};Zd.set(`blob`,class extends ep{async readWhole(){this.chunked=!1;let e=await rf(this.input);this._swapArrayBuffer(e)}readChunked(){return this.chunked=!0,this.size=this.input.size,super.readChunked()}async _readChunk(e,t){let n=t?e+t:void 0,r=await rf(this.input.slice(e,n));return this.set(r,e,!0)}});var tp=Object.freeze({__proto__:null,default:Rf,Exifr:Tf,fileParsers:Yd,segmentParsers:Xd,fileReaders:Zd,tagKeys:sf,tagValues:cf,tagRevivers:lf,createDictionary:Q,extendDictionary:of,fetchUrlAsArrayBuffer:nf,readBlobAsArrayBuffer:rf,chunkedProps:uf,otherSegments:df,segments:ff,tiffBlocks:$,segmentsAndBlocks:pf,tiffExtractables:mf,inheritables:hf,allFormatters:gf,Options:xf,parse:Ef,gpsOnlyOptions:Bf,gps:Vf,thumbnailOnlyOptions:Hf,thumbnail:Uf,thumbnailUrl:Wf,orientationOnlyOptions:Gf,orientation:Kf,rotations:qf,get rotateCanvas(){return Jf},get rotateCss(){return Yf},rotation:Xf});Zd.set(`url`,class extends ep{async readWhole(){this.chunked=!1;let e=await nf(this.input);e instanceof ArrayBuffer?this._swapArrayBuffer(e):e instanceof Uint8Array&&this._swapBuffer(e)}async _readChunk(e,t){let n=t?e+t-1:void 0,r=this.options.httpHeaders||{};(e||n)&&(r.range=`bytes=${[e,n].join(`-`)}`);let i=await Fd(this.input,{headers:r}),a=await i.arrayBuffer(),o=a.byteLength;if(i.status!==416)return o!==t&&(this.size=e+o),this.set(a,e,!0)}}),Kd.prototype.getUint64=function(e){let t=this.getUint32(e),n=this.getUint32(e+4);return t<1048575?t<<32|n:(console.warn(`Using BigInt because of type 64uint but JS can only handle 53b numbers.`),jd(t)<<jd(32)|jd(n))};var np=class extends Of{parseBoxes(e=0){let t=[];for(;e<this.file.byteLength-4;){let n=this.parseBoxHead(e);if(t.push(n),n.length===0)break;e+=n.length}return t}parseSubBoxes(e){e.boxes=this.parseBoxes(e.start)}findBox(e,t){return e.boxes===void 0&&this.parseSubBoxes(e),e.boxes.find((e=>e.kind===t))}parseBoxHead(e){let t=this.file.getUint32(e),n=this.file.getString(e+4,4),r=e+8;return t===1&&(t=this.file.getUint64(e+8),r+=8),{offset:e,length:t,kind:n,start:r}}parseBoxFullHead(e){e.version===void 0&&(e.version=this.file.getUint32(e.start)>>24,e.start+=4)}},rp=class extends np{static canHandle(e,t){if(t!==0)return!1;let n=e.getUint16(2);if(n>50)return!1;let r=16,i=[];for(;r<n;)i.push(e.getString(r,4)),r+=4;return i.includes(this.type)}async parse(){let e=this.file.getUint32(0),t=this.parseBoxHead(e);for(;t.kind!==`meta`;)e+=t.length,await this.file.ensureChunk(e,16),t=this.parseBoxHead(e);await this.file.ensureChunk(t.offset,t.length),this.parseBoxFullHead(t),this.parseSubBoxes(t),this.options.icc.enabled&&await this.findIcc(t),this.options.tiff.enabled&&await this.findExif(t)}async registerSegment(e,t,n){await this.file.ensureChunk(t,n);let r=this.file.subarray(t,n);this.createParser(e,r)}async findIcc(e){let t=this.findBox(e,`iprp`);if(t===void 0)return;let n=this.findBox(t,`ipco`);if(n===void 0)return;let r=this.findBox(n,`colr`);r!==void 0&&await this.registerSegment(`icc`,r.offset+12,r.length)}async findExif(e){let t=this.findBox(e,`iinf`);if(t===void 0)return;let n=this.findBox(e,`iloc`);if(n===void 0)return;let r=this.findExifLocIdInIinf(t),i=this.findExtentInIloc(n,r);if(i===void 0)return;let[a,o]=i;await this.file.ensureChunk(a,o);let s=4+this.file.getUint32(a);a+=s,o-=s,await this.registerSegment(`tiff`,a,o)}findExifLocIdInIinf(e){this.parseBoxFullHead(e);let t,n,r,i,a=e.start,o=this.file.getUint16(a);for(a+=2;o--;){if(t=this.parseBoxHead(a),this.parseBoxFullHead(t),n=t.start,t.version>=2&&(r=t.version===3?4:2,i=this.file.getString(n+r+2,4),i===`Exif`))return this.file.getUintBytes(n,r);a+=t.length}}get8bits(e){let t=this.file.getUint8(e);return[t>>4,15&t]}findExtentInIloc(e,t){this.parseBoxFullHead(e);let n=e.start,[r,i]=this.get8bits(n++),[a,o]=this.get8bits(n++),s=e.version===2?4:2,c=e.version===1||e.version===2?2:0,l=o+r+i,u=e.version===2?4:2,d=this.file.getUintBytes(n,u);for(n+=u;d--;){let e=this.file.getUintBytes(n,s);n+=s+c+2+a;let u=this.file.getUint16(n);if(n+=2,e===t)return u>1&&console.warn(`ILOC box has more than one extent but we're only processing one
Please create an issue at https://github.com/MikeKovarik/exifr with this file`),[this.file.getUintBytes(n+o,r),this.file.getUintBytes(n+o+r,i)];n+=u*l}}},ip=class extends rp{};Z(ip,`type`,`heic`);var ap=class extends rp{};Z(ap,`type`,`avif`),Yd.set(`heic`,ip),Yd.set(`avif`,ap),Q(sf,[`ifd0`,`ifd1`],[[256,`ImageWidth`],[257,`ImageHeight`],[258,`BitsPerSample`],[259,`Compression`],[262,`PhotometricInterpretation`],[270,`ImageDescription`],[271,`Make`],[272,`Model`],[273,`StripOffsets`],[274,`Orientation`],[277,`SamplesPerPixel`],[278,`RowsPerStrip`],[279,`StripByteCounts`],[282,`XResolution`],[283,`YResolution`],[284,`PlanarConfiguration`],[296,`ResolutionUnit`],[301,`TransferFunction`],[305,`Software`],[306,`ModifyDate`],[315,`Artist`],[316,`HostComputer`],[317,`Predictor`],[318,`WhitePoint`],[319,`PrimaryChromaticities`],[513,`ThumbnailOffset`],[514,`ThumbnailLength`],[529,`YCbCrCoefficients`],[530,`YCbCrSubSampling`],[531,`YCbCrPositioning`],[532,`ReferenceBlackWhite`],[700,`ApplicationNotes`],[33432,`Copyright`],[33723,`IPTC`],[34665,`ExifIFD`],[34675,`ICC`],[34853,`GpsIFD`],[330,`SubIFD`],[40965,`InteropIFD`],[40091,`XPTitle`],[40092,`XPComment`],[40093,`XPAuthor`],[40094,`XPKeywords`],[40095,`XPSubject`]]),Q(sf,`exif`,[[33434,`ExposureTime`],[33437,`FNumber`],[34850,`ExposureProgram`],[34852,`SpectralSensitivity`],[34855,`ISO`],[34858,`TimeZoneOffset`],[34859,`SelfTimerMode`],[34864,`SensitivityType`],[34865,`StandardOutputSensitivity`],[34866,`RecommendedExposureIndex`],[34867,`ISOSpeed`],[34868,`ISOSpeedLatitudeyyy`],[34869,`ISOSpeedLatitudezzz`],[36864,`ExifVersion`],[36867,`DateTimeOriginal`],[36868,`CreateDate`],[36873,`GooglePlusUploadCode`],[36880,`OffsetTime`],[36881,`OffsetTimeOriginal`],[36882,`OffsetTimeDigitized`],[37121,`ComponentsConfiguration`],[37122,`CompressedBitsPerPixel`],[37377,`ShutterSpeedValue`],[37378,`ApertureValue`],[37379,`BrightnessValue`],[37380,`ExposureCompensation`],[37381,`MaxApertureValue`],[37382,`SubjectDistance`],[37383,`MeteringMode`],[37384,`LightSource`],[37385,`Flash`],[37386,`FocalLength`],[37393,`ImageNumber`],[37394,`SecurityClassification`],[37395,`ImageHistory`],[37396,`SubjectArea`],[37500,`MakerNote`],[37510,`UserComment`],[37520,`SubSecTime`],[37521,`SubSecTimeOriginal`],[37522,`SubSecTimeDigitized`],[37888,`AmbientTemperature`],[37889,`Humidity`],[37890,`Pressure`],[37891,`WaterDepth`],[37892,`Acceleration`],[37893,`CameraElevationAngle`],[40960,`FlashpixVersion`],[40961,`ColorSpace`],[40962,`ExifImageWidth`],[40963,`ExifImageHeight`],[40964,`RelatedSoundFile`],[41483,`FlashEnergy`],[41486,`FocalPlaneXResolution`],[41487,`FocalPlaneYResolution`],[41488,`FocalPlaneResolutionUnit`],[41492,`SubjectLocation`],[41493,`ExposureIndex`],[41495,`SensingMethod`],[41728,`FileSource`],[41729,`SceneType`],[41730,`CFAPattern`],[41985,`CustomRendered`],[41986,`ExposureMode`],[41987,`WhiteBalance`],[41988,`DigitalZoomRatio`],[41989,`FocalLengthIn35mmFormat`],[41990,`SceneCaptureType`],[41991,`GainControl`],[41992,`Contrast`],[41993,`Saturation`],[41994,`Sharpness`],[41996,`SubjectDistanceRange`],[42016,`ImageUniqueID`],[42032,`OwnerName`],[42033,`SerialNumber`],[42034,`LensInfo`],[42035,`LensMake`],[42036,`LensModel`],[42037,`LensSerialNumber`],[42080,`CompositeImage`],[42081,`CompositeImageCount`],[42082,`CompositeImageExposureTimes`],[42240,`Gamma`],[59932,`Padding`],[59933,`OffsetSchema`],[65e3,`OwnerName`],[65001,`SerialNumber`],[65002,`Lens`],[65100,`RawFile`],[65101,`Converter`],[65102,`WhiteBalance`],[65105,`Exposure`],[65106,`Shadows`],[65107,`Brightness`],[65108,`Contrast`],[65109,`Saturation`],[65110,`Sharpness`],[65111,`Smoothness`],[65112,`MoireFilter`],[40965,`InteropIFD`]]),Q(sf,`gps`,[[0,`GPSVersionID`],[1,`GPSLatitudeRef`],[2,`GPSLatitude`],[3,`GPSLongitudeRef`],[4,`GPSLongitude`],[5,`GPSAltitudeRef`],[6,`GPSAltitude`],[7,`GPSTimeStamp`],[8,`GPSSatellites`],[9,`GPSStatus`],[10,`GPSMeasureMode`],[11,`GPSDOP`],[12,`GPSSpeedRef`],[13,`GPSSpeed`],[14,`GPSTrackRef`],[15,`GPSTrack`],[16,`GPSImgDirectionRef`],[17,`GPSImgDirection`],[18,`GPSMapDatum`],[19,`GPSDestLatitudeRef`],[20,`GPSDestLatitude`],[21,`GPSDestLongitudeRef`],[22,`GPSDestLongitude`],[23,`GPSDestBearingRef`],[24,`GPSDestBearing`],[25,`GPSDestDistanceRef`],[26,`GPSDestDistance`],[27,`GPSProcessingMethod`],[28,`GPSAreaInformation`],[29,`GPSDateStamp`],[30,`GPSDifferential`],[31,`GPSHPositioningError`]]),Q(cf,[`ifd0`,`ifd1`],[[274,{1:`Horizontal (normal)`,2:`Mirror horizontal`,3:`Rotate 180`,4:`Mirror vertical`,5:`Mirror horizontal and rotate 270 CW`,6:`Rotate 90 CW`,7:`Mirror horizontal and rotate 90 CW`,8:`Rotate 270 CW`}],[296,{1:`None`,2:`inches`,3:`cm`}]]);var op=Q(cf,`exif`,[[34850,{0:`Not defined`,1:`Manual`,2:`Normal program`,3:`Aperture priority`,4:`Shutter priority`,5:`Creative program`,6:`Action program`,7:`Portrait mode`,8:`Landscape mode`}],[37121,{0:`-`,1:`Y`,2:`Cb`,3:`Cr`,4:`R`,5:`G`,6:`B`}],[37383,{0:`Unknown`,1:`Average`,2:`CenterWeightedAverage`,3:`Spot`,4:`MultiSpot`,5:`Pattern`,6:`Partial`,255:`Other`}],[37384,{0:`Unknown`,1:`Daylight`,2:`Fluorescent`,3:`Tungsten (incandescent light)`,4:`Flash`,9:`Fine weather`,10:`Cloudy weather`,11:`Shade`,12:`Daylight fluorescent (D 5700 - 7100K)`,13:`Day white fluorescent (N 4600 - 5400K)`,14:`Cool white fluorescent (W 3900 - 4500K)`,15:`White fluorescent (WW 3200 - 3700K)`,17:`Standard light A`,18:`Standard light B`,19:`Standard light C`,20:`D55`,21:`D65`,22:`D75`,23:`D50`,24:`ISO studio tungsten`,255:`Other`}],[37385,{0:`Flash did not fire`,1:`Flash fired`,5:`Strobe return light not detected`,7:`Strobe return light detected`,9:`Flash fired, compulsory flash mode`,13:`Flash fired, compulsory flash mode, return light not detected`,15:`Flash fired, compulsory flash mode, return light detected`,16:`Flash did not fire, compulsory flash mode`,24:`Flash did not fire, auto mode`,25:`Flash fired, auto mode`,29:`Flash fired, auto mode, return light not detected`,31:`Flash fired, auto mode, return light detected`,32:`No flash function`,65:`Flash fired, red-eye reduction mode`,69:`Flash fired, red-eye reduction mode, return light not detected`,71:`Flash fired, red-eye reduction mode, return light detected`,73:`Flash fired, compulsory flash mode, red-eye reduction mode`,77:`Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected`,79:`Flash fired, compulsory flash mode, red-eye reduction mode, return light detected`,89:`Flash fired, auto mode, red-eye reduction mode`,93:`Flash fired, auto mode, return light not detected, red-eye reduction mode`,95:`Flash fired, auto mode, return light detected, red-eye reduction mode`}],[41495,{1:`Not defined`,2:`One-chip color area sensor`,3:`Two-chip color area sensor`,4:`Three-chip color area sensor`,5:`Color sequential area sensor`,7:`Trilinear sensor`,8:`Color sequential linear sensor`}],[41728,{1:`Film Scanner`,2:`Reflection Print Scanner`,3:`Digital Camera`}],[41729,{1:`Directly photographed`}],[41985,{0:`Normal`,1:`Custom`,2:`HDR (no original saved)`,3:`HDR (original saved)`,4:`Original (for HDR)`,6:`Panorama`,7:`Portrait HDR`,8:`Portrait`}],[41986,{0:`Auto`,1:`Manual`,2:`Auto bracket`}],[41987,{0:`Auto`,1:`Manual`}],[41990,{0:`Standard`,1:`Landscape`,2:`Portrait`,3:`Night`,4:`Other`}],[41991,{0:`None`,1:`Low gain up`,2:`High gain up`,3:`Low gain down`,4:`High gain down`}],[41996,{0:`Unknown`,1:`Macro`,2:`Close`,3:`Distant`}],[42080,{0:`Unknown`,1:`Not a Composite Image`,2:`General Composite Image`,3:`Composite Image Captured While Shooting`}]]),sp={1:`No absolute unit of measurement`,2:`Inch`,3:`Centimeter`};op.set(37392,sp),op.set(41488,sp);var cp={0:`Normal`,1:`Low`,2:`High`};function lp(e){return typeof e==`object`&&e.length!==void 0?e[0]:e}function up(e){let t=Array.from(e).slice(1);return t[1]>15&&(t=t.map((e=>String.fromCharCode(e)))),t[2]!==`0`&&t[2]!==0||t.pop(),t.join(`.`)}function dp(e){if(typeof e==`string`){var[t,n,r,i,a,o]=e.trim().split(/[-: ]/g).map(Number),s=new Date(t,n-1,r);return Number.isNaN(i)||Number.isNaN(a)||Number.isNaN(o)||(s.setHours(i),s.setMinutes(a),s.setSeconds(o)),Number.isNaN(+s)?e:s}}function fp(e){if(typeof e==`string`)return e;let t=[];if(e[1]===0&&e[e.length-1]===0)for(let n=0;n<e.length;n+=2)t.push(pp(e[n+1],e[n]));else for(let n=0;n<e.length;n+=2)t.push(pp(e[n],e[n+1]));return Vd(String.fromCodePoint(...t))}function pp(e,t){return e<<8|t}op.set(41992,cp),op.set(41993,cp),op.set(41994,cp),Q(lf,[`ifd0`,`ifd1`],[[50827,function(e){return typeof e==`string`?e:Gd(e)}],[306,dp],[40091,fp],[40092,fp],[40093,fp],[40094,fp],[40095,fp]]),Q(lf,`exif`,[[40960,up],[36864,up],[36867,dp],[36868,dp],[40962,lp],[40963,lp]]),Q(lf,`gps`,[[0,e=>Array.from(e).join(`.`)],[7,e=>Array.from(e).join(`:`)]]);var mp=class extends kf{static canHandle(e,t){return e.getUint8(t+1)===225&&e.getUint32(t+4)===1752462448&&e.getString(t+4,20)===`http://ns.adobe.com/`}static headerLength(e,t){return e.getString(t+4,34)===`http://ns.adobe.com/xmp/extension/`?79:33}static findPosition(e,t){let n=super.findPosition(e,t);return n.multiSegment=n.extended=n.headerLength===79,n.multiSegment?(n.chunkCount=e.getUint8(t+72),n.chunkNumber=e.getUint8(t+76),e.getUint8(t+77)!==0&&n.chunkNumber++):(n.chunkCount=1/0,n.chunkNumber=-1),n}static handleMultiSegments(e){return e.map((e=>e.chunk.getString())).join(``)}normalizeInput(e){return typeof e==`string`?e:Kd.from(e).getString()}parse(e=this.chunk){if(!this.localOptions.parse)return e;e=function(e){let t={},n={};for(let e of Cp)t[e]=[],n[e]=0;return e.replace(wp,((e,r,i)=>{if(r===`<`){let r=++n[i];return t[i].push(r),`${e}#${r}`}return`${e}#${t[i].pop()}`}))}(e);let t=gp.findAll(e,`rdf`,`Description`);t.length===0&&t.push(new gp(`rdf`,`Description`,void 0,e));let n,r={};for(let e of t)for(let t of e.properties)n=bp(t.ns,r),_p(t,n);return function(e){let t;for(let n in e)t=e[n]=Ld(e[n]),t===void 0&&delete e[n];return Ld(e)}(r)}assignToOutput(e,t){if(this.localOptions.parse)for(let[n,r]of Object.entries(t))switch(n){case`tiff`:this.assignObjectToOutput(e,`ifd0`,r);break;case`exif`:this.assignObjectToOutput(e,`exif`,r);break;case`xmlns`:break;default:this.assignObjectToOutput(e,n,r)}else e.xmp=t}};Z(mp,`type`,`xmp`),Z(mp,`multiSegment`,!0),Xd.set(`xmp`,mp);var hp=class e{static findAll(t){return xp(t,/([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(e.unpackMatch)}static unpackMatch(t){let n=t[1],r=t[2],i=t[3].slice(1,-1);return i=Sp(i),new e(n,r,i)}constructor(e,t,n){this.ns=e,this.name=t,this.value=n}serialize(){return this.value}},gp=class e{static findAll(t,n,r){if(n!==void 0||r!==void 0){n||=`[\\w\\d-]+`,r||=`[\\w\\d-]+`;var i=RegExp(`<(${n}):(${r})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`,`gm`)}else i=/<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;return xp(t,i).map(e.unpackMatch)}static unpackMatch(t){let n=t[1],r=t[2],i=t[4],a=t[8];return new e(n,r,i,a)}constructor(t,n,r,i){this.ns=t,this.name=n,this.attrString=r,this.innerXml=i,this.attrs=hp.findAll(r),this.children=e.findAll(i),this.value=this.children.length===0?Sp(i):void 0,this.properties=[...this.attrs,...this.children]}get isPrimitive(){return this.value!==void 0&&this.attrs.length===0&&this.children.length===0}get isListContainer(){return this.children.length===1&&this.children[0].isList}get isList(){let{ns:e,name:t}=this;return e===`rdf`&&(t===`Seq`||t===`Bag`||t===`Alt`)}get isListItem(){return this.ns===`rdf`&&this.name===`li`}serialize(){if(this.properties.length===0&&this.value===void 0)return;if(this.isPrimitive)return this.value;if(this.isListContainer)return this.children[0].serialize();if(this.isList)return yp(this.children.map(vp));if(this.isListItem&&this.children.length===1&&this.attrs.length===0)return this.children[0].serialize();let e={};for(let t of this.properties)_p(t,e);return this.value!==void 0&&(e.value=this.value),Ld(e)}};function _p(e,t){let n=e.serialize();n!==void 0&&(t[e.name]=n)}var vp=e=>e.serialize(),yp=e=>e.length===1?e[0]:e,bp=(e,t)=>t[e]?t[e]:t[e]={};function xp(e,t){let n,r=[];if(!e)return r;for(;(n=t.exec(e))!==null;)r.push(n);return r}function Sp(e){if(function(e){return e==null||e===`null`||e===`undefined`||e===``||e.trim()===``}(e))return;let t=Number(e);if(!Number.isNaN(t))return t;let n=e.toLowerCase();return n===`true`||n!==`false`&&e.trim()}var Cp=[`rdf:li`,`rdf:Seq`,`rdf:Bag`,`rdf:Alt`,`rdf:Description`],wp=RegExp(`(<|\\/)(${Cp.join(`|`)})`,`g`);Object.freeze({__proto__:null,default:tp,Exifr:Tf,fileParsers:Yd,segmentParsers:Xd,fileReaders:Zd,tagKeys:sf,tagValues:cf,tagRevivers:lf,createDictionary:Q,extendDictionary:of,fetchUrlAsArrayBuffer:nf,readBlobAsArrayBuffer:rf,chunkedProps:uf,otherSegments:df,segments:ff,tiffBlocks:$,segmentsAndBlocks:pf,tiffExtractables:mf,inheritables:hf,allFormatters:gf,Options:xf,parse:Ef,gpsOnlyOptions:Bf,gps:Vf,thumbnailOnlyOptions:Hf,thumbnail:Uf,thumbnailUrl:Wf,orientationOnlyOptions:Gf,orientation:Kf,rotations:qf,get rotateCanvas(){return Jf},get rotateCss(){return Yf},rotation:Xf});var Tp=Pd(`fs`,(e=>e.promises));Zd.set(`fs`,class extends ep{async readWhole(){this.chunked=!1,this.fs=await Tp;let e=await this.fs.readFile(this.input);this._swapBuffer(e)}async readChunked(){this.chunked=!0,this.fs=await Tp,await this.open(),await this.readChunk(0,this.options.firstChunkSize)}async open(){this.fh===void 0&&(this.fh=await this.fs.open(this.input,`r`),this.size=(await this.fh.stat(this.input)).size)}async _readChunk(e,t){this.fh===void 0&&await this.open(),e+t>this.size&&(t=this.size-e);var n=this.subarray(e,t,!0);return await this.fh.read(n.dataView,0,t,e),n}async close(){if(this.fh){let e=this.fh;this.fh=void 0,await e.close()}}}),Zd.set(`base64`,class extends ep{constructor(...e){super(...e),this.input=this.input.replace(/^data:([^;]+);base64,/gim,``),this.size=this.input.length/4*3,this.input.endsWith(`==`)?this.size-=2:this.input.endsWith(`=`)&&--this.size}async _readChunk(e,t){let n,r,i=this.input;e===void 0?(e=0,n=0,r=0):(n=4*Math.floor(e/3),r=e-n/4*3),t===void 0&&(t=this.size);let a=e+t,o=n+4*Math.ceil(a/3);i=i.slice(n,o);let s=Math.min(t,this.size-e);if(Md){let t=Ad.from(i,`base64`).slice(r,r+s);return this.set(t,e,!0)}{let t=this.subarray(e,s,!0),n=atob(i),a=t.toUint8();for(let e=0;e<s;e++)a[e]=n.charCodeAt(r+e);return t}}});var Ep=class extends Of{static canHandle(e,t){return t===18761||t===19789}extendOptions(e){let{ifd0:t,xmp:n,iptc:r,icc:i}=e;n.enabled&&t.deps.add(700),r.enabled&&t.deps.add(33723),i.enabled&&t.deps.add(34675),t.finalizeFilters()}async parse(){let{tiff:e,xmp:t,iptc:n,icc:r}=this.options;if(e.enabled||t.enabled||n.enabled||r.enabled){let e=Math.max(Hd(this.options),this.options.chunkSize);await this.file.ensureChunk(0,e),this.createParser(`tiff`,this.file),this.parsers.tiff.parseHeader(),await this.parsers.tiff.parseIfd0Block(),this.adaptTiffPropAsSegment(`xmp`),this.adaptTiffPropAsSegment(`iptc`),this.adaptTiffPropAsSegment(`icc`)}}adaptTiffPropAsSegment(e){if(this.parsers.tiff[e]){let t=this.parsers.tiff[e];this.injectSegment(e,t)}}};Z(Ep,`type`,`tiff`),Yd.set(`tiff`,Ep);var Dp=Pd(`zlib`),Op=[`ihdr`,`iccp`,`text`,`itxt`,`exif`],kp=class extends Of{constructor(...e){super(...e),Z(this,`catchError`,(e=>this.errors.push(e))),Z(this,`metaChunks`,[]),Z(this,`unknownChunks`,[])}static canHandle(e,t){return t===35152&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834}async parse(){let{file:e}=this;await this.findPngChunksInRange(8,e.byteLength),await this.readSegments(this.metaChunks),this.findIhdr(),this.parseTextChunks(),await this.findExif().catch(this.catchError),await this.findXmp().catch(this.catchError),await this.findIcc().catch(this.catchError)}async findPngChunksInRange(e,t){let{file:n}=this;for(;e<t;){let t=n.getUint32(e),r=n.getUint32(e+4),i=n.getString(e+4,4).toLowerCase(),a=t+4+4+4,o={type:i,offset:e,length:a,start:e+4+4,size:t,marker:r};Op.includes(i)?this.metaChunks.push(o):this.unknownChunks.push(o),e+=a}}parseTextChunks(){let e=this.metaChunks.filter((e=>e.type===`text`));for(let t of e){let[e,n]=this.file.getString(t.start,t.size).split(`\0`);this.injectKeyValToIhdr(e,n)}}injectKeyValToIhdr(e,t){let n=this.parsers.ihdr;n&&n.raw.set(e,t)}findIhdr(){let e=this.metaChunks.find((e=>e.type===`ihdr`));e&&!1!==this.options.ihdr.enabled&&this.createParser(`ihdr`,e.chunk)}async findExif(){let e=this.metaChunks.find((e=>e.type===`exif`));e&&this.injectSegment(`tiff`,e.chunk)}async findXmp(){let e=this.metaChunks.filter((e=>e.type===`itxt`));for(let t of e)t.chunk.getString(0,17)===`XML:com.adobe.xmp`&&this.injectSegment(`xmp`,t.chunk)}async findIcc(){let e=this.metaChunks.find((e=>e.type===`iccp`));if(!e)return;let{chunk:t}=e,n=t.getUint8Array(0,81),r=0;for(;r<80&&n[r]!==0;)r++;let i=r+2,a=t.getString(0,r);if(this.injectKeyValToIhdr(`ProfileName`,a),kd){let e=await Dp,n=t.getUint8Array(i);n=e.inflateSync(n),this.injectSegment(`icc`,n)}}};Z(kp,`type`,`png`),Yd.set(`png`,kp),Q(sf,`interop`,[[1,`InteropIndex`],[2,`InteropVersion`],[4096,`RelatedImageFileFormat`],[4097,`RelatedImageWidth`],[4098,`RelatedImageHeight`]]),of(sf,`ifd0`,[[11,`ProcessingSoftware`],[254,`SubfileType`],[255,`OldSubfileType`],[263,`Thresholding`],[264,`CellWidth`],[265,`CellLength`],[266,`FillOrder`],[269,`DocumentName`],[280,`MinSampleValue`],[281,`MaxSampleValue`],[285,`PageName`],[286,`XPosition`],[287,`YPosition`],[290,`GrayResponseUnit`],[297,`PageNumber`],[321,`HalftoneHints`],[322,`TileWidth`],[323,`TileLength`],[332,`InkSet`],[337,`TargetPrinter`],[18246,`Rating`],[18249,`RatingPercent`],[33550,`PixelScale`],[34264,`ModelTransform`],[34377,`PhotoshopSettings`],[50706,`DNGVersion`],[50707,`DNGBackwardVersion`],[50708,`UniqueCameraModel`],[50709,`LocalizedCameraModel`],[50736,`DNGLensInfo`],[50739,`ShadowScale`],[50740,`DNGPrivateData`],[33920,`IntergraphMatrix`],[33922,`ModelTiePoint`],[34118,`SEMInfo`],[34735,`GeoTiffDirectory`],[34736,`GeoTiffDoubleParams`],[34737,`GeoTiffAsciiParams`],[50341,`PrintIM`],[50721,`ColorMatrix1`],[50722,`ColorMatrix2`],[50723,`CameraCalibration1`],[50724,`CameraCalibration2`],[50725,`ReductionMatrix1`],[50726,`ReductionMatrix2`],[50727,`AnalogBalance`],[50728,`AsShotNeutral`],[50729,`AsShotWhiteXY`],[50730,`BaselineExposure`],[50731,`BaselineNoise`],[50732,`BaselineSharpness`],[50734,`LinearResponseLimit`],[50735,`CameraSerialNumber`],[50741,`MakerNoteSafety`],[50778,`CalibrationIlluminant1`],[50779,`CalibrationIlluminant2`],[50781,`RawDataUniqueID`],[50827,`OriginalRawFileName`],[50828,`OriginalRawFileData`],[50831,`AsShotICCProfile`],[50832,`AsShotPreProfileMatrix`],[50833,`CurrentICCProfile`],[50834,`CurrentPreProfileMatrix`],[50879,`ColorimetricReference`],[50885,`SRawType`],[50898,`PanasonicTitle`],[50899,`PanasonicTitle2`],[50931,`CameraCalibrationSig`],[50932,`ProfileCalibrationSig`],[50933,`ProfileIFD`],[50934,`AsShotProfileName`],[50936,`ProfileName`],[50937,`ProfileHueSatMapDims`],[50938,`ProfileHueSatMapData1`],[50939,`ProfileHueSatMapData2`],[50940,`ProfileToneCurve`],[50941,`ProfileEmbedPolicy`],[50942,`ProfileCopyright`],[50964,`ForwardMatrix1`],[50965,`ForwardMatrix2`],[50966,`PreviewApplicationName`],[50967,`PreviewApplicationVersion`],[50968,`PreviewSettingsName`],[50969,`PreviewSettingsDigest`],[50970,`PreviewColorSpace`],[50971,`PreviewDateTime`],[50972,`RawImageDigest`],[50973,`OriginalRawFileDigest`],[50981,`ProfileLookTableDims`],[50982,`ProfileLookTableData`],[51043,`TimeCodes`],[51044,`FrameRate`],[51058,`TStop`],[51081,`ReelName`],[51089,`OriginalDefaultFinalSize`],[51090,`OriginalBestQualitySize`],[51091,`OriginalDefaultCropSize`],[51105,`CameraLabel`],[51107,`ProfileHueSatMapEncoding`],[51108,`ProfileLookTableEncoding`],[51109,`BaselineExposureOffset`],[51110,`DefaultBlackRender`],[51111,`NewRawImageDigest`],[51112,`RawToPreviewGain`]]);var Ap=[[273,`StripOffsets`],[279,`StripByteCounts`],[288,`FreeOffsets`],[289,`FreeByteCounts`],[291,`GrayResponseCurve`],[292,`T4Options`],[293,`T6Options`],[300,`ColorResponseUnit`],[320,`ColorMap`],[324,`TileOffsets`],[325,`TileByteCounts`],[326,`BadFaxLines`],[327,`CleanFaxData`],[328,`ConsecutiveBadFaxLines`],[330,`SubIFD`],[333,`InkNames`],[334,`NumberofInks`],[336,`DotRange`],[338,`ExtraSamples`],[339,`SampleFormat`],[340,`SMinSampleValue`],[341,`SMaxSampleValue`],[342,`TransferRange`],[343,`ClipPath`],[344,`XClipPathUnits`],[345,`YClipPathUnits`],[346,`Indexed`],[347,`JPEGTables`],[351,`OPIProxy`],[400,`GlobalParametersIFD`],[401,`ProfileType`],[402,`FaxProfile`],[403,`CodingMethods`],[404,`VersionYear`],[405,`ModeNumber`],[433,`Decode`],[434,`DefaultImageColor`],[435,`T82Options`],[437,`JPEGTables`],[512,`JPEGProc`],[515,`JPEGRestartInterval`],[517,`JPEGLosslessPredictors`],[518,`JPEGPointTransforms`],[519,`JPEGQTables`],[520,`JPEGDCTables`],[521,`JPEGACTables`],[559,`StripRowCounts`],[999,`USPTOMiscellaneous`],[18247,`XP_DIP_XML`],[18248,`StitchInfo`],[28672,`SonyRawFileType`],[28688,`SonyToneCurve`],[28721,`VignettingCorrection`],[28722,`VignettingCorrParams`],[28724,`ChromaticAberrationCorrection`],[28725,`ChromaticAberrationCorrParams`],[28726,`DistortionCorrection`],[28727,`DistortionCorrParams`],[29895,`SonyCropTopLeft`],[29896,`SonyCropSize`],[32781,`ImageID`],[32931,`WangTag1`],[32932,`WangAnnotation`],[32933,`WangTag3`],[32934,`WangTag4`],[32953,`ImageReferencePoints`],[32954,`RegionXformTackPoint`],[32955,`WarpQuadrilateral`],[32956,`AffineTransformMat`],[32995,`Matteing`],[32996,`DataType`],[32997,`ImageDepth`],[32998,`TileDepth`],[33300,`ImageFullWidth`],[33301,`ImageFullHeight`],[33302,`TextureFormat`],[33303,`WrapModes`],[33304,`FovCot`],[33305,`MatrixWorldToScreen`],[33306,`MatrixWorldToCamera`],[33405,`Model2`],[33421,`CFARepeatPatternDim`],[33422,`CFAPattern2`],[33423,`BatteryLevel`],[33424,`KodakIFD`],[33445,`MDFileTag`],[33446,`MDScalePixel`],[33447,`MDColorTable`],[33448,`MDLabName`],[33449,`MDSampleInfo`],[33450,`MDPrepDate`],[33451,`MDPrepTime`],[33452,`MDFileUnits`],[33589,`AdventScale`],[33590,`AdventRevision`],[33628,`UIC1Tag`],[33629,`UIC2Tag`],[33630,`UIC3Tag`],[33631,`UIC4Tag`],[33918,`IntergraphPacketData`],[33919,`IntergraphFlagRegisters`],[33921,`INGRReserved`],[34016,`Site`],[34017,`ColorSequence`],[34018,`IT8Header`],[34019,`RasterPadding`],[34020,`BitsPerRunLength`],[34021,`BitsPerExtendedRunLength`],[34022,`ColorTable`],[34023,`ImageColorIndicator`],[34024,`BackgroundColorIndicator`],[34025,`ImageColorValue`],[34026,`BackgroundColorValue`],[34027,`PixelIntensityRange`],[34028,`TransparencyIndicator`],[34029,`ColorCharacterization`],[34030,`HCUsage`],[34031,`TrapIndicator`],[34032,`CMYKEquivalent`],[34152,`AFCP_IPTC`],[34232,`PixelMagicJBIGOptions`],[34263,`JPLCartoIFD`],[34306,`WB_GRGBLevels`],[34310,`LeafData`],[34687,`TIFF_FXExtensions`],[34688,`MultiProfiles`],[34689,`SharedData`],[34690,`T88Options`],[34732,`ImageLayer`],[34750,`JBIGOptions`],[34856,`Opto-ElectricConvFactor`],[34857,`Interlace`],[34908,`FaxRecvParams`],[34909,`FaxSubAddress`],[34910,`FaxRecvTime`],[34929,`FedexEDR`],[34954,`LeafSubIFD`],[37387,`FlashEnergy`],[37388,`SpatialFrequencyResponse`],[37389,`Noise`],[37390,`FocalPlaneXResolution`],[37391,`FocalPlaneYResolution`],[37392,`FocalPlaneResolutionUnit`],[37397,`ExposureIndex`],[37398,`TIFF-EPStandardID`],[37399,`SensingMethod`],[37434,`CIP3DataFile`],[37435,`CIP3Sheet`],[37436,`CIP3Side`],[37439,`StoNits`],[37679,`MSDocumentText`],[37680,`MSPropertySetStorage`],[37681,`MSDocumentTextPosition`],[37724,`ImageSourceData`],[40965,`InteropIFD`],[40976,`SamsungRawPointersOffset`],[40977,`SamsungRawPointersLength`],[41217,`SamsungRawByteOrder`],[41218,`SamsungRawUnknown`],[41484,`SpatialFrequencyResponse`],[41485,`Noise`],[41489,`ImageNumber`],[41490,`SecurityClassification`],[41491,`ImageHistory`],[41494,`TIFF-EPStandardID`],[41995,`DeviceSettingDescription`],[42112,`GDALMetadata`],[42113,`GDALNoData`],[44992,`ExpandSoftware`],[44993,`ExpandLens`],[44994,`ExpandFilm`],[44995,`ExpandFilterLens`],[44996,`ExpandScanner`],[44997,`ExpandFlashLamp`],[46275,`HasselbladRawImage`],[48129,`PixelFormat`],[48130,`Transformation`],[48131,`Uncompressed`],[48132,`ImageType`],[48256,`ImageWidth`],[48257,`ImageHeight`],[48258,`WidthResolution`],[48259,`HeightResolution`],[48320,`ImageOffset`],[48321,`ImageByteCount`],[48322,`AlphaOffset`],[48323,`AlphaByteCount`],[48324,`ImageDataDiscard`],[48325,`AlphaDataDiscard`],[50215,`OceScanjobDesc`],[50216,`OceApplicationSelector`],[50217,`OceIDNumber`],[50218,`OceImageLogic`],[50255,`Annotations`],[50459,`HasselbladExif`],[50547,`OriginalFileName`],[50560,`USPTOOriginalContentType`],[50656,`CR2CFAPattern`],[50710,`CFAPlaneColor`],[50711,`CFALayout`],[50712,`LinearizationTable`],[50713,`BlackLevelRepeatDim`],[50714,`BlackLevel`],[50715,`BlackLevelDeltaH`],[50716,`BlackLevelDeltaV`],[50717,`WhiteLevel`],[50718,`DefaultScale`],[50719,`DefaultCropOrigin`],[50720,`DefaultCropSize`],[50733,`BayerGreenSplit`],[50737,`ChromaBlurRadius`],[50738,`AntiAliasStrength`],[50752,`RawImageSegmentation`],[50780,`BestQualityScale`],[50784,`AliasLayerMetadata`],[50829,`ActiveArea`],[50830,`MaskedAreas`],[50935,`NoiseReductionApplied`],[50974,`SubTileBlockSize`],[50975,`RowInterleaveFactor`],[51008,`OpcodeList1`],[51009,`OpcodeList2`],[51022,`OpcodeList3`],[51041,`NoiseProfile`],[51114,`CacheVersion`],[51125,`DefaultUserCrop`],[51157,`NikonNEFInfo`],[65024,`KdcIFD`]];of(sf,`ifd0`,Ap),of(sf,`exif`,Ap),Q(cf,`gps`,[[23,{M:`Magnetic North`,T:`True North`}],[25,{K:`Kilometers`,M:`Miles`,N:`Nautical Miles`}]]);var jp=class extends kf{static canHandle(e,t){return e.getUint8(t+1)===224&&e.getUint32(t+4)===1246120262&&e.getUint8(t+8)===0}parse(){return this.parseTags(),this.translate(),this.output}parseTags(){this.raw=new Map([[0,this.chunk.getUint16(0)],[2,this.chunk.getUint8(2)],[3,this.chunk.getUint16(3)],[5,this.chunk.getUint16(5)],[7,this.chunk.getUint8(7)],[8,this.chunk.getUint8(8)]])}};Z(jp,`type`,`jfif`),Z(jp,`headerLength`,9),Xd.set(`jfif`,jp),Q(sf,`jfif`,[[0,`JFIFVersion`],[2,`ResolutionUnit`],[3,`XResolution`],[5,`YResolution`],[7,`ThumbnailWidth`],[8,`ThumbnailHeight`]]);var Mp=class extends kf{parse(){return this.parseTags(),this.translate(),this.output}parseTags(){this.raw=new Map([[0,this.chunk.getUint32(0)],[4,this.chunk.getUint32(4)],[8,this.chunk.getUint8(8)],[9,this.chunk.getUint8(9)],[10,this.chunk.getUint8(10)],[11,this.chunk.getUint8(11)],[12,this.chunk.getUint8(12)],...Array.from(this.raw)])}};Z(Mp,`type`,`ihdr`),Xd.set(`ihdr`,Mp),Q(sf,`ihdr`,[[0,`ImageWidth`],[4,`ImageHeight`],[8,`BitDepth`],[9,`ColorType`],[10,`Compression`],[11,`Filter`],[12,`Interlace`]]),Q(cf,`ihdr`,[[9,{0:`Grayscale`,2:`RGB`,3:`Palette`,4:`Grayscale with Alpha`,6:`RGB with Alpha`,DEFAULT:`Unknown`}],[10,{0:`Deflate/Inflate`,DEFAULT:`Unknown`}],[11,{0:`Adaptive`,DEFAULT:`Unknown`}],[12,{0:`Noninterlaced`,1:`Adam7 Interlace`,DEFAULT:`Unknown`}]]);var Np=class extends kf{static canHandle(e,t){return e.getUint8(t+1)===226&&e.getUint32(t+4)===1229144927}static findPosition(e,t){let n=super.findPosition(e,t);return n.chunkNumber=e.getUint8(t+16),n.chunkCount=e.getUint8(t+17),n.multiSegment=n.chunkCount>1,n}static handleMultiSegments(e){return function(e){return new Kd(function(e){let t=e[0].constructor,n=0;for(let t of e)n+=t.length;let r=new t(n),i=0;for(let t of e)r.set(t,i),i+=t.length;return r}(e.map((e=>e.chunk.toUint8()))))}(e)}parse(){return this.raw=new Map,this.parseHeader(),this.parseTags(),this.translate(),this.output}parseHeader(){let{raw:e}=this;this.chunk.byteLength<84&&Bd(`ICC header is too short`);for(let[t,n]of Object.entries(Pp)){t=parseInt(t,10);let r=n(this.chunk,t);r!==`\0\0\0\0`&&e.set(t,r)}}parseTags(){let e,t,n,r,i,{raw:a}=this,o=this.chunk.getUint32(128),s=132,c=this.chunk.byteLength;for(;o--;){if(e=this.chunk.getString(s,4),t=this.chunk.getUint32(s+4),n=this.chunk.getUint32(s+8),r=this.chunk.getString(t,4),t+n>c)return void console.warn(`reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.`);i=this.parseTag(r,t,n),i!==void 0&&i!==`\0\0\0\0`&&a.set(e,i),s+=12}}parseTag(e,t,n){switch(e){case`desc`:return this.parseDesc(t);case`mluc`:return this.parseMluc(t);case`text`:return this.parseText(t,n);case`sig `:return this.parseSig(t)}if(!(t+n>this.chunk.byteLength))return this.chunk.getUint8Array(t,n)}parseDesc(e){let t=this.chunk.getUint32(e+8)-1;return Vd(this.chunk.getString(e+12,t))}parseText(e,t){return Vd(this.chunk.getString(e+8,t-8))}parseSig(e){return Vd(this.chunk.getString(e+8,4))}parseMluc(e){let{chunk:t}=this,n=t.getUint32(e+8),r=t.getUint32(e+12),i=e+16,a=[];for(let o=0;o<n;o++){let n=t.getString(i+0,2),o=t.getString(i+2,2),s=t.getUint32(i+4),c=t.getUint32(i+8)+e,l=Vd(t.getUnicodeString(c,s));a.push({lang:n,country:o,text:l}),i+=r}return n===1?a[0].text:a}translateValue(e,t){return typeof e==`string`?t[e]||t[e.toLowerCase()]||e:t[e]||e}};Z(Np,`type`,`icc`),Z(Np,`multiSegment`,!0),Z(Np,`headerLength`,18);var Pp={4:Fp,8:function(e,t){return[e.getUint8(t),e.getUint8(t+1)>>4,e.getUint8(t+1)%16].map((e=>e.toString(10))).join(`.`)},12:Fp,16:Fp,20:Fp,24:function(e,t){let n=e.getUint16(t),r=e.getUint16(t+2)-1,i=e.getUint16(t+4),a=e.getUint16(t+6),o=e.getUint16(t+8),s=e.getUint16(t+10);return new Date(Date.UTC(n,r,i,a,o,s))},36:Fp,40:Fp,48:Fp,52:Fp,64:(e,t)=>e.getUint32(t),80:Fp};function Fp(e,t){return Vd(e.getString(t,4))}Xd.set(`icc`,Np),Q(sf,`icc`,[[4,`ProfileCMMType`],[8,`ProfileVersion`],[12,`ProfileClass`],[16,`ColorSpaceData`],[20,`ProfileConnectionSpace`],[24,`ProfileDateTime`],[36,`ProfileFileSignature`],[40,`PrimaryPlatform`],[44,`CMMFlags`],[48,`DeviceManufacturer`],[52,`DeviceModel`],[56,`DeviceAttributes`],[64,`RenderingIntent`],[68,`ConnectionSpaceIlluminant`],[80,`ProfileCreator`],[84,`ProfileID`],[`Header`,`ProfileHeader`],[`MS00`,`WCSProfiles`],[`bTRC`,`BlueTRC`],[`bXYZ`,`BlueMatrixColumn`],[`bfd`,`UCRBG`],[`bkpt`,`MediaBlackPoint`],[`calt`,`CalibrationDateTime`],[`chad`,`ChromaticAdaptation`],[`chrm`,`Chromaticity`],[`ciis`,`ColorimetricIntentImageState`],[`clot`,`ColorantTableOut`],[`clro`,`ColorantOrder`],[`clrt`,`ColorantTable`],[`cprt`,`ProfileCopyright`],[`crdi`,`CRDInfo`],[`desc`,`ProfileDescription`],[`devs`,`DeviceSettings`],[`dmdd`,`DeviceModelDesc`],[`dmnd`,`DeviceMfgDesc`],[`dscm`,`ProfileDescriptionML`],[`fpce`,`FocalPlaneColorimetryEstimates`],[`gTRC`,`GreenTRC`],[`gXYZ`,`GreenMatrixColumn`],[`gamt`,`Gamut`],[`kTRC`,`GrayTRC`],[`lumi`,`Luminance`],[`meas`,`Measurement`],[`meta`,`Metadata`],[`mmod`,`MakeAndModel`],[`ncl2`,`NamedColor2`],[`ncol`,`NamedColor`],[`ndin`,`NativeDisplayInfo`],[`pre0`,`Preview0`],[`pre1`,`Preview1`],[`pre2`,`Preview2`],[`ps2i`,`PS2RenderingIntent`],[`ps2s`,`PostScript2CSA`],[`psd0`,`PostScript2CRD0`],[`psd1`,`PostScript2CRD1`],[`psd2`,`PostScript2CRD2`],[`psd3`,`PostScript2CRD3`],[`pseq`,`ProfileSequenceDesc`],[`psid`,`ProfileSequenceIdentifier`],[`psvm`,`PS2CRDVMSize`],[`rTRC`,`RedTRC`],[`rXYZ`,`RedMatrixColumn`],[`resp`,`OutputResponse`],[`rhoc`,`ReflectionHardcopyOrigColorimetry`],[`rig0`,`PerceptualRenderingIntentGamut`],[`rig2`,`SaturationRenderingIntentGamut`],[`rpoc`,`ReflectionPrintOutputColorimetry`],[`sape`,`SceneAppearanceEstimates`],[`scoe`,`SceneColorimetryEstimates`],[`scrd`,`ScreeningDesc`],[`scrn`,`Screening`],[`targ`,`CharTarget`],[`tech`,`Technology`],[`vcgt`,`VideoCardGamma`],[`view`,`ViewingConditions`],[`vued`,`ViewingCondDesc`],[`wtpt`,`MediaWhitePoint`]]);var Ip={"4d2p":`Erdt Systems`,AAMA:`Aamazing Technologies`,ACER:`Acer`,ACLT:`Acolyte Color Research`,ACTI:`Actix Sytems`,ADAR:`Adara Technology`,ADBE:`Adobe`,ADI:`ADI Systems`,AGFA:`Agfa Graphics`,ALMD:`Alps Electric`,ALPS:`Alps Electric`,ALWN:`Alwan Color Expertise`,AMTI:`Amiable Technologies`,AOC:`AOC International`,APAG:`Apago`,APPL:`Apple Computer`,AST:`AST`,"AT&T":`AT&T`,BAEL:`BARBIERI electronic`,BRCO:`Barco NV`,BRKP:`Breakpoint`,BROT:`Brother`,BULL:`Bull`,BUS:`Bus Computer Systems`,"C-IT":`C-Itoh`,CAMR:`Intel`,CANO:`Canon`,CARR:`Carroll Touch`,CASI:`Casio`,CBUS:`Colorbus PL`,CEL:`Crossfield`,CELx:`Crossfield`,CGS:`CGS Publishing Technologies International`,CHM:`Rochester Robotics`,CIGL:`Colour Imaging Group, London`,CITI:`Citizen`,CL00:`Candela`,CLIQ:`Color IQ`,CMCO:`Chromaco`,CMiX:`CHROMiX`,COLO:`Colorgraphic Communications`,COMP:`Compaq`,COMp:`Compeq/Focus Technology`,CONR:`Conrac Display Products`,CORD:`Cordata Technologies`,CPQ:`Compaq`,CPRO:`ColorPro`,CRN:`Cornerstone`,CTX:`CTX International`,CVIS:`ColorVision`,CWC:`Fujitsu Laboratories`,DARI:`Darius Technology`,DATA:`Dataproducts`,DCP:`Dry Creek Photo`,DCRC:`Digital Contents Resource Center, Chung-Ang University`,DELL:`Dell Computer`,DIC:`Dainippon Ink and Chemicals`,DICO:`Diconix`,DIGI:`Digital`,"DL&C":`Digital Light & Color`,DPLG:`Doppelganger`,DS:`Dainippon Screen`,DSOL:`DOOSOL`,DUPN:`DuPont`,EPSO:`Epson`,ESKO:`Esko-Graphics`,ETRI:`Electronics and Telecommunications Research Institute`,EVER:`Everex Systems`,EXAC:`ExactCODE`,Eizo:`Eizo`,FALC:`Falco Data Products`,FF:`Fuji Photo Film`,FFEI:`FujiFilm Electronic Imaging`,FNRD:`Fnord Software`,FORA:`Fora`,FORE:`Forefront Technology`,FP:`Fujitsu`,FPA:`WayTech Development`,FUJI:`Fujitsu`,FX:`Fuji Xerox`,GCC:`GCC Technologies`,GGSL:`Global Graphics Software`,GMB:`Gretagmacbeth`,GMG:`GMG`,GOLD:`GoldStar Technology`,GOOG:`Google`,GPRT:`Giantprint`,GTMB:`Gretagmacbeth`,GVC:`WayTech Development`,GW2K:`Sony`,HCI:`HCI`,HDM:`Heidelberger Druckmaschinen`,HERM:`Hermes`,HITA:`Hitachi America`,HP:`Hewlett-Packard`,HTC:`Hitachi`,HiTi:`HiTi Digital`,IBM:`IBM`,IDNT:`Scitex`,IEC:`Hewlett-Packard`,IIYA:`Iiyama North America`,IKEG:`Ikegami Electronics`,IMAG:`Image Systems`,IMI:`Ingram Micro`,INTC:`Intel`,INTL:`N/A (INTL)`,INTR:`Intra Electronics`,IOCO:`Iocomm International Technology`,IPS:`InfoPrint Solutions Company`,IRIS:`Scitex`,ISL:`Ichikawa Soft Laboratory`,ITNL:`N/A (ITNL)`,IVM:`IVM`,IWAT:`Iwatsu Electric`,Idnt:`Scitex`,Inca:`Inca Digital Printers`,Iris:`Scitex`,JPEG:`Joint Photographic Experts Group`,JSFT:`Jetsoft Development`,JVC:`JVC Information Products`,KART:`Scitex`,KFC:`KFC Computek Components`,KLH:`KLH Computers`,KMHD:`Konica Minolta`,KNCA:`Konica`,KODA:`Kodak`,KYOC:`Kyocera`,Kart:`Scitex`,LCAG:`Leica`,LCCD:`Leeds Colour`,LDAK:`Left Dakota`,LEAD:`Leading Technology`,LEXM:`Lexmark International`,LINK:`Link Computer`,LINO:`Linotronic`,LITE:`Lite-On`,Leaf:`Leaf`,Lino:`Linotronic`,MAGC:`Mag Computronic`,MAGI:`MAG Innovision`,MANN:`Mannesmann`,MICN:`Micron Technology`,MICR:`Microtek`,MICV:`Microvitec`,MINO:`Minolta`,MITS:`Mitsubishi Electronics America`,MITs:`Mitsuba`,MNLT:`Minolta`,MODG:`Modgraph`,MONI:`Monitronix`,MONS:`Monaco Systems`,MORS:`Morse Technology`,MOTI:`Motive Systems`,MSFT:`Microsoft`,MUTO:`MUTOH INDUSTRIES`,Mits:`Mitsubishi Electric`,NANA:`NANAO`,NEC:`NEC`,NEXP:`NexPress Solutions`,NISS:`Nissei Sangyo America`,NKON:`Nikon`,NONE:`none`,OCE:`Oce Technologies`,OCEC:`OceColor`,OKI:`Oki`,OKID:`Okidata`,OKIP:`Okidata`,OLIV:`Olivetti`,OLYM:`Olympus`,ONYX:`Onyx Graphics`,OPTI:`Optiquest`,PACK:`Packard Bell`,PANA:`Matsushita Electric Industrial`,PANT:`Pantone`,PBN:`Packard Bell`,PFU:`PFU`,PHIL:`Philips Consumer Electronics`,PNTX:`HOYA`,POne:`Phase One A/S`,PREM:`Premier Computer Innovations`,PRIN:`Princeton Graphic Systems`,PRIP:`Princeton Publishing Labs`,QLUX:`Hong Kong`,QMS:`QMS`,QPCD:`QPcard AB`,QUAD:`QuadLaser`,QUME:`Qume`,RADI:`Radius`,RDDx:`Integrated Color Solutions`,RDG:`Roland DG`,REDM:`REDMS Group`,RELI:`Relisys`,RGMS:`Rolf Gierling Multitools`,RICO:`Ricoh`,RNLD:`Edmund Ronald`,ROYA:`Royal`,RPC:`Ricoh Printing Systems`,RTL:`Royal Information Electronics`,SAMP:`Sampo`,SAMS:`Samsung`,SANT:`Jaime Santana Pomares`,SCIT:`Scitex`,SCRN:`Dainippon Screen`,SDP:`Scitex`,SEC:`Samsung`,SEIK:`Seiko Instruments`,SEIk:`Seikosha`,SGUY:`ScanGuy.com`,SHAR:`Sharp Laboratories`,SICC:`International Color Consortium`,SONY:`Sony`,SPCL:`SpectraCal`,STAR:`Star`,STC:`Sampo Technology`,Scit:`Scitex`,Sdp:`Scitex`,Sony:`Sony`,TALO:`Talon Technology`,TAND:`Tandy`,TATU:`Tatung`,TAXA:`TAXAN America`,TDS:`Tokyo Denshi Sekei`,TECO:`TECO Information Systems`,TEGR:`Tegra`,TEKT:`Tektronix`,TI:`Texas Instruments`,TMKR:`TypeMaker`,TOSB:`Toshiba`,TOSH:`Toshiba`,TOTK:`TOTOKU ELECTRIC`,TRIU:`Triumph`,TSBT:`Toshiba`,TTX:`TTX Computer Products`,TVM:`TVM Professional Monitor`,TW:`TW Casper`,ULSX:`Ulead Systems`,UNIS:`Unisys`,UTZF:`Utz Fehlau & Sohn`,VARI:`Varityper`,VIEW:`Viewsonic`,VISL:`Visual communication`,VIVO:`Vivo Mobile Communication`,WANG:`Wang`,WLBR:`Wilbur Imaging`,WTG2:`Ware To Go`,WYSE:`WYSE Technology`,XERX:`Xerox`,XRIT:`X-Rite`,ZRAN:`Zoran`,Zebr:`Zebra Technologies`,appl:`Apple Computer`,bICC:`basICColor`,berg:`bergdesign`,ceyd:`Integrated Color Solutions`,clsp:`MacDermid ColorSpan`,ds:`Dainippon Screen`,dupn:`DuPont`,ffei:`FujiFilm Electronic Imaging`,flux:`FluxData`,iris:`Scitex`,kart:`Scitex`,lcms:`Little CMS`,lino:`Linotronic`,none:`none`,ob4d:`Erdt Systems`,obic:`Medigraph`,quby:`Qubyx Sarl`,scit:`Scitex`,scrn:`Dainippon Screen`,sdp:`Scitex`,siwi:`SIWI GRAFIKA`,yxym:`YxyMaster`},Lp={scnr:`Scanner`,mntr:`Monitor`,prtr:`Printer`,link:`Device Link`,abst:`Abstract`,spac:`Color Space Conversion Profile`,nmcl:`Named Color`,cenc:`ColorEncodingSpace profile`,mid:`MultiplexIdentification profile`,mlnk:`MultiplexLink profile`,mvis:`MultiplexVisualization profile`,nkpf:`Nikon Input Device Profile (NON-STANDARD!)`};Q(cf,`icc`,[[4,Ip],[12,Lp],[40,Object.assign({},Ip,Lp)],[48,Ip],[80,Ip],[64,{0:`Perceptual`,1:`Relative Colorimetric`,2:`Saturation`,3:`Absolute Colorimetric`}],[`tech`,{amd:`Active Matrix Display`,crt:`Cathode Ray Tube Display`,kpcd:`Photo CD`,pmd:`Passive Matrix Display`,dcam:`Digital Camera`,dcpj:`Digital Cinema Projector`,dmpc:`Digital Motion Picture Camera`,dsub:`Dye Sublimation Printer`,epho:`Electrophotographic Printer`,esta:`Electrostatic Printer`,flex:`Flexography`,fprn:`Film Writer`,fscn:`Film Scanner`,grav:`Gravure`,ijet:`Ink Jet Printer`,imgs:`Photo Image Setter`,mpfr:`Motion Picture Film Recorder`,mpfs:`Motion Picture Film Scanner`,offs:`Offset Lithography`,pjtv:`Projection Television`,rpho:`Photographic Paper Printer`,rscn:`Reflective Scanner`,silk:`Silkscreen`,twax:`Thermal Wax Printer`,vidc:`Video Camera`,vidm:`Video Monitor`}]]);var Rp=class extends kf{static canHandle(e,t,n){return e.getUint8(t+1)===237&&e.getString(t+4,9)===`Photoshop`&&this.containsIptc8bim(e,t,n)!==void 0}static headerLength(e,t,n){let r,i=this.containsIptc8bim(e,t,n);if(i!==void 0)return r=e.getUint8(t+i+7),r%2!=0&&(r+=1),r===0&&(r=4),i+8+r}static containsIptc8bim(e,t,n){for(let r=0;r<n;r++)if(this.isIptcSegmentHead(e,t+r))return r}static isIptcSegmentHead(e,t){return e.getUint8(t)===56&&e.getUint32(t)===943868237&&e.getUint16(t+4)===1028}parse(){let{raw:e}=this,t=this.chunk.byteLength-1,n=!1;for(let r=0;r<t;r++)if(this.chunk.getUint8(r)===28&&this.chunk.getUint8(r+1)===2){n=!0;let t=this.chunk.getUint16(r+3),i=this.chunk.getUint8(r+2),a=this.chunk.getLatin1String(r+5,t);e.set(i,this.pluralizeValue(e.get(i),a)),r+=4+t}else if(n)break;return this.translate(),this.output}pluralizeValue(e,t){return e===void 0?t:e instanceof Array?(e.push(t),e):[e,t]}};Z(Rp,`type`,`iptc`),Z(Rp,`translateValues`,!1),Z(Rp,`reviveValues`,!1),Xd.set(`iptc`,Rp),Q(sf,`iptc`,[[0,`ApplicationRecordVersion`],[3,`ObjectTypeReference`],[4,`ObjectAttributeReference`],[5,`ObjectName`],[7,`EditStatus`],[8,`EditorialUpdate`],[10,`Urgency`],[12,`SubjectReference`],[15,`Category`],[20,`SupplementalCategories`],[22,`FixtureIdentifier`],[25,`Keywords`],[26,`ContentLocationCode`],[27,`ContentLocationName`],[30,`ReleaseDate`],[35,`ReleaseTime`],[37,`ExpirationDate`],[38,`ExpirationTime`],[40,`SpecialInstructions`],[42,`ActionAdvised`],[45,`ReferenceService`],[47,`ReferenceDate`],[50,`ReferenceNumber`],[55,`DateCreated`],[60,`TimeCreated`],[62,`DigitalCreationDate`],[63,`DigitalCreationTime`],[65,`OriginatingProgram`],[70,`ProgramVersion`],[75,`ObjectCycle`],[80,`Byline`],[85,`BylineTitle`],[90,`City`],[92,`Sublocation`],[95,`State`],[100,`CountryCode`],[101,`Country`],[103,`OriginalTransmissionReference`],[105,`Headline`],[110,`Credit`],[115,`Source`],[116,`CopyrightNotice`],[118,`Contact`],[120,`Caption`],[121,`LocalCaption`],[122,`Writer`],[125,`RasterizedCaption`],[130,`ImageType`],[131,`ImageOrientation`],[135,`LanguageIdentifier`],[150,`AudioType`],[151,`AudioSamplingRate`],[152,`AudioSamplingResolution`],[153,`AudioDuration`],[154,`AudioOutcue`],[184,`JobID`],[185,`MasterDocumentID`],[186,`ShortDocumentID`],[187,`UniqueDocumentID`],[188,`OwnerID`],[200,`ObjectPreviewFileFormat`],[201,`ObjectPreviewFileVersion`],[202,`ObjectPreviewData`],[221,`Prefs`],[225,`ClassifyState`],[228,`SimilarityIndex`],[230,`DocumentNotes`],[231,`DocumentHistory`],[232,`ExifCameraInfo`],[255,`CatalogSets`]]),Q(cf,`iptc`,[[10,{0:`0 (reserved)`,1:`1 (most urgent)`,2:`2`,3:`3`,4:`4`,5:`5 (normal urgency)`,6:`6`,7:`7`,8:`8 (least urgent)`,9:`9 (user-defined priority)`}],[75,{a:`Morning`,b:`Both Morning and Evening`,p:`Evening`}],[131,{L:`Landscape`,P:`Portrait`,S:`Square`}]]);var zp=`/equipment-rotation/models/orientation_model.onnx`,Bp=384,Vp=[.485,.456,.406],Hp=[.229,.224,.225],Up=document.getElementById(`status`),Wp=document.getElementById(`file`),Gp=document.getElementById(`url-list`),Kp=document.getElementById(`run-urls`),qp=document.getElementById(`preview`),Jp=document.getElementById(`results`),Yp;async function Xp(){return Yp||=De.create(zp,{executionProviders:[`wasm`],graphOptimizationLevel:`all`}),Yp}function Zp(e){let t=Math.max(...e),n=e.map(e=>Math.exp(e-t)),r=n.reduce((e,t)=>e+t,0);return n.map(e=>e/r)}function Qp(e){switch(e){case 0:return 0;case 1:return 90;case 2:return 180;case 3:return-90;default:return 0}}function $p(e){return[`upright`,`rotate 90° clockwise`,`rotate 180°`,`rotate 90° counter-clockwise`][e]??`unknown`}function em(e){return new Promise((t,n)=>{let r=URL.createObjectURL(e),i=new Image;i.onload=()=>{URL.revokeObjectURL(r),t(i)},i.onerror=()=>{URL.revokeObjectURL(r),n(Error(`Could not load the image.`))},i.src=r})}function tm(e,t){let n=Math.min(e,t);return{sx:Math.floor((e-n)/2),sy:Math.floor((t-n)/2),size:n}}function nm(e){let t=e.inputNames[0],n=e.inputMetadata.find(e=>e.name===t);if(!n?.isTensor)return Bp;let[,r,i,a]=n.shape;if(r!==3)throw Error(`Expected an RGB image model, but got input shape ${n.shape.join(`x`)}.`);if(typeof i==`number`&&typeof a==`number`){if(i!==a)throw Error(`Expected a square image input, but got input shape ${n.shape.join(`x`)}.`);return i}return Bp}function rm(e,t){let n=document.createElement(`canvas`);n.width=t,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0}),{sx:i,sy:a,size:o}=tm(e.width,e.height);r.drawImage(e,i,a,o,o,0,0,t,t);let{data:s}=r.getImageData(0,0,t,t),c=new Float32Array(3*t*t),l=t*t;for(let e=0;e<l;e++){let t=s[e*4]/255,n=s[e*4+1]/255,r=s[e*4+2]/255;c[e]=(t-Vp[0])/Hp[0],c[l+e]=(n-Vp[1])/Hp[1],c[l*2+e]=(r-Vp[2])/Hp[2]}return new _e(`float32`,c,[1,3,t,t])}async function im(e){let t=await Xp(),n=rm(e,nm(t)),r=t.inputNames[0],i=t.outputNames[0],a=await t.run({[r]:n}),o=Zp(Array.from(a[i].data)),s=0;for(let e=1;e<o.length;e++)o[e]>o[s]&&(s=e);return{classIndex:s,label:$p(s),confidence:o[s],correctionDegrees:Qp(s),probabilities:o}}function am(e,t){if(t===0)return e.src;let n=t*Math.PI/180,r=Math.abs(t)===90,i=document.createElement(`canvas`);i.width=r?e.height:e.width,i.height=r?e.width:e.height;let a=i.getContext(`2d`);return a.translate(i.width/2,i.height/2),a.rotate(n),a.drawImage(e,-e.width/2,-e.height/2),i.toDataURL(`image/jpeg`,.92)}async function om(e){return(await Ef(e,[`Orientation`]))?.Orientation||1}async function sm({imageBlob:e,sourceLabel:t}){try{let n=await em(e),r=await om(e);qp.src=n.src,Up.textContent=`Running model…`;let i=await im(n);qp.src=am(n,i.correctionDegrees);let a=`${t}: ${i.label} | confidence: ${(i.confidence*100).toFixed(1)}% | applied correction: ${i.correctionDegrees}° | EXIF orientation: ${r}`;return Up.textContent=a,a}catch(e){console.error(e);let n=`${t}: failed to run prediction: ${e instanceof Error?e.message:String(e)}`;return Up.textContent=n,n}}async function cm(e){let t=await fetch(e);if(!t.ok)throw Error(`Request failed (${t.status} ${t.statusText}).`);let n=t.headers.get(`content-type`);if(n&&!n.startsWith(`image/`))throw Error(`URL returned ${n} instead of an image.`);return t.blob()}Wp.addEventListener(`change`,async e=>{let t=e.target.files?.[0];t&&(Jp.textContent=``,Up.textContent=`Loading image…`,Jp.textContent=await sm({imageBlob:t,sourceLabel:t.name}))}),Kp.addEventListener(`click`,async()=>{let e=Gp.value.split(`
`).map(e=>e.trim()).filter(Boolean);if(!e.length){Up.textContent=`Enter at least one image URL.`,Jp.textContent=``;return}let t=[];for(let n=0;n<e.length;n++){let r=e[n];Up.textContent=`Fetching image ${n+1}/${e.length}…`;try{let e=await sm({imageBlob:await cm(r),sourceLabel:r});t.push(e)}catch(e){console.error(e);let n=`${r}: failed to fetch image: ${e instanceof Error?e.message:String(e)}`;Up.textContent=n,t.push(n)}}Jp.textContent=t.join(`
`)});