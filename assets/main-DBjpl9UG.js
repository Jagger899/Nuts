import{s as hu,a as cu,m as lu,p as du}from"./promoVideo-KdGnkAEo.js";import{m as fu,a as pu}from"./swiper-CJwqpOFA.js";import{i as gu,n as mu}from"./news-swiper-DCeqkkc3.js";var ws={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},_u=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],d=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,_=o>>2,A=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,V=f&63;d||(V=64,u||(R=64)),r.push(e[_],e[A],e[R],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(_o(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_u(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||A==null)throw new yu;const R=o<<2|c>>4;if(r.push(R),f!==64){const V=c<<4&240|f>>2;if(r.push(V),A!==64){const k=f<<6&192|A;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eu=function(n){const t=_o(n);return yo.encodeByteArray(t,!0)},On=function(n){return Eu(n).replace(/\./g,"")},vu=function(n){try{return yo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=()=>Tu().__FIREBASE_DEFAULTS__,wu=()=>{if(typeof process>"u"||typeof ws>"u")return;const n=ws.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Au=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&vu(n[1]);return t&&JSON.parse(t)},Zr=()=>{try{return Iu()||wu()||Au()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ru=n=>{var t,e;return(e=(t=Zr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Cu=n=>{const t=Ru(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Eo=()=>{var n;return(n=Zr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[On(JSON.stringify(e)),On(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bu(){var n;const t=(n=Zr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Du(){return!bu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nu(){try{return typeof indexedDB=="object"}catch{return!1}}function ku(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="FirebaseError";class ye extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Mu,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Ou(o,r):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new ye(s,c,r)}}function Ou(n,t){return n.replace(xu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const xu=/\{\$([^}]+)}/g;function kr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],u=t[s];if(As(o)&&As(u)){if(!kr(o,u))return!1}else if(o!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function As(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){return n&&n._delegate?n._delegate:n}class Xe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Su;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bu(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uu(n){return n===Kt?void 0:n}function Bu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Fu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const ju={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},$u=U.INFO,zu={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Gu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=zu[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class To{constructor(t){this.name=t,this._logLevel=$u,this._logHandler=Gu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ju[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Ku=(n,t)=>t.some(e=>n instanceof e);let Rs,Cs;function Hu(){return Rs||(Rs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qu(){return Cs||(Cs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Io=new WeakMap,Mr=new WeakMap,wo=new WeakMap,Ar=new WeakMap,ti=new WeakMap;function Wu(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Lt(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Io.set(e,n)}).catch(()=>{}),ti.set(t,n),t}function Xu(n){if(Mr.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Mr.set(n,t)}let Or={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Mr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||wo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Lt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Yu(n){Or=n(Or)}function Ju(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Rr(this),t,...e);return wo.set(r,t.sort?t.sort():[t]),Lt(r)}:Qu().includes(n)?function(...t){return n.apply(Rr(this),t),Lt(Io.get(this))}:function(...t){return Lt(n.apply(Rr(this),t))}}function Zu(n){return typeof n=="function"?Ju(n):(n instanceof IDBTransaction&&Xu(n),Ku(n,Hu())?new Proxy(n,Or):n)}function Lt(n){if(n instanceof IDBRequest)return Wu(n);if(Ar.has(n))return Ar.get(n);const t=Zu(n);return t!==n&&(Ar.set(n,t),ti.set(t,n)),t}const Rr=n=>ti.get(n);function th(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Lt(u);return r&&u.addEventListener("upgradeneeded",d=>{r(Lt(u.result),d.oldVersion,d.newVersion,Lt(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const eh=["get","getKey","getAll","getAllKeys","count"],nh=["put","add","delete","clear"],Cr=new Map;function Ss(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Cr.get(t))return Cr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=nh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||eh.includes(e)))return;const o=async function(u,...c){const d=this.transaction(u,s?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&d.done]))[0]};return Cr.set(t,o),o}Yu(n=>({...n,get:(t,e,r)=>Ss(t,e)||n.get(t,e,r),has:(t,e)=>!!Ss(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ih(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ih(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xr="@firebase/app",Ps="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new To("@firebase/app"),sh="@firebase/app-compat",oh="@firebase/analytics-compat",ah="@firebase/analytics",uh="@firebase/app-check-compat",hh="@firebase/app-check",ch="@firebase/auth",lh="@firebase/auth-compat",dh="@firebase/database",fh="@firebase/database-compat",ph="@firebase/functions",gh="@firebase/functions-compat",mh="@firebase/installations",_h="@firebase/installations-compat",yh="@firebase/messaging",Eh="@firebase/messaging-compat",vh="@firebase/performance",Th="@firebase/performance-compat",Ih="@firebase/remote-config",wh="@firebase/remote-config-compat",Ah="@firebase/storage",Rh="@firebase/storage-compat",Ch="@firebase/firestore",Sh="@firebase/vertexai-preview",Ph="@firebase/firestore-compat",Vh="firebase",bh="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]",Dh={[xr]:"fire-core",[sh]:"fire-core-compat",[ah]:"fire-analytics",[oh]:"fire-analytics-compat",[hh]:"fire-app-check",[uh]:"fire-app-check-compat",[ch]:"fire-auth",[lh]:"fire-auth-compat",[dh]:"fire-rtdb",[fh]:"fire-rtdb-compat",[ph]:"fire-fn",[gh]:"fire-fn-compat",[mh]:"fire-iid",[_h]:"fire-iid-compat",[yh]:"fire-fcm",[Eh]:"fire-fcm-compat",[vh]:"fire-perf",[Th]:"fire-perf-compat",[Ih]:"fire-rc",[wh]:"fire-rc-compat",[Ah]:"fire-gcs",[Rh]:"fire-gcs-compat",[Ch]:"fire-fst",[Ph]:"fire-fst-compat",[Sh]:"fire-vertex","fire-js":"fire-js",[Vh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Map,Nh=new Map,Fr=new Map;function Vs(n,t){try{n.container.addComponent(t)}catch(e){Yt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ln(n){const t=n.name;if(Fr.has(t))return Yt.debug(`There were multiple attempts to register component ${t}.`),!1;Fr.set(t,n);for(const e of xn.values())Vs(e,n);for(const e of Nh.values())Vs(e,n);return!0}function kh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new vo("app","Firebase",Mh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=bh;function Ao(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Lr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(e||(e=Eo()),!e)throw Ft.create("no-options");const o=xn.get(s);if(o){if(kr(e,o.options)&&kr(r,o.config))return o;throw Ft.create("duplicate-app",{appName:s})}const u=new qu(s);for(const d of Fr.values())u.addComponent(d);const c=new Oh(e,r,u);return xn.set(s,c),c}function Lh(n=Lr){const t=xn.get(n);if(!t&&n===Lr&&Eo())return Ao();if(!t)throw Ft.create("no-app",{appName:n});return t}function ue(n,t,e){var r;let s=(r=Dh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yt.warn(c.join(" "));return}Ln(new Xe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="firebase-heartbeat-database",Uh=1,Ye="firebase-heartbeat-store";let Sr=null;function Ro(){return Sr||(Sr=th(Fh,Uh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ye)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),Sr}async function Bh(n){try{const e=(await Ro()).transaction(Ye),r=await e.objectStore(Ye).get(Co(n));return await e.done,r}catch(t){if(t instanceof ye)Yt.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yt.warn(e.message)}}}async function bs(n,t){try{const r=(await Ro()).transaction(Ye,"readwrite");await r.objectStore(Ye).put(t,Co(n)),await r.done}catch(e){if(e instanceof ye)Yt.warn(e.message);else{const r=Ft.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(r.message)}}}function Co(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=1024,jh=30*24*60*60*1e3;class $h{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ds();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=jh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ds(),{heartbeatsToSend:r,unsentEntries:s}=zh(this._heartbeatsCache.heartbeats),o=On(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ds(){return new Date().toISOString().substring(0,10)}function zh(n,t=qh){const e=[];let r=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Ns(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ns(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Gh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nu()?ku().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return bs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return bs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ns(n){return On(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n){Ln(new Xe("platform-logger",t=>new rh(t),"PRIVATE")),Ln(new Xe("heartbeat",t=>new $h(t),"PRIVATE")),ue(xr,Ps,n),ue(xr,Ps,"esm2017"),ue("fire-js","")}Kh("");var Hh="firebase",Qh="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ue(Hh,Qh,"app");var ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,So;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(y,E,I){for(var g=Array(arguments.length-2),St=2;St<arguments.length;St++)g[St-2]=arguments[St];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],E=v.g[2];var I=v.g[3],g=p+(I^m&(E^I))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(m^E))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(m^E^I)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(E^(m|~I))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=m;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)v[m++]=this.g[p]>>>y&255;return v};function o(v,p){var m=c;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function u(v,p){this.h=p;for(var m=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(m[E]=I,y=!1)}this.g=m}var c={};function d(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return D(f(-v));for(var p=[],m=1,y=0;v>=m;y++)p[y]=v/m|0,m*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=A,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var A=d(0),R=d(1),V=d(16777216);n=u.prototype,n.m=function(){if(L(this))return-D(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(L(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),m=this,y="";;){var E=nt(m,p).g;m=X(m,E.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=E,k(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function L(v){return v.h==-1}n.l=function(v){return v=X(this,v),L(v)?-1:k(v)?0:1};function D(v){for(var p=v.g.length,m=[],y=0;y<p;y++)m[y]=~v.g[y];return new u(m,~v.h).add(R)}n.abs=function(){return L(this)?D(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,m[E]=g<<16|I}return new u(m,m[m.length-1]&-2147483648?-1:0)};function X(v,p){return v.add(D(p))}n.j=function(v){if(k(this)||k(v))return A;if(L(this))return L(v)?D(this).j(D(v)):D(D(this).j(v));if(L(v))return D(this.j(D(v)));if(0>this.l(V)&&0>v.l(V))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,St=v.i(E)>>>16,we=v.i(E)&65535;m[2*y+2*E]+=g*we,H(m,2*y+2*E),m[2*y+2*E+1]+=I*we,H(m,2*y+2*E+1),m[2*y+2*E+1]+=g*St,H(m,2*y+2*E+1),m[2*y+2*E+2]+=I*St,H(m,2*y+2*E+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new u(m,0)};function H(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function Q(v,p){this.g=v,this.h=p}function nt(v,p){if(k(p))throw Error("division by zero");if(k(v))return new Q(A,A);if(L(v))return p=nt(D(v),p),new Q(D(p.g),D(p.h));if(L(p))return p=nt(v,D(p)),new Q(D(p.g),p.h);if(30<v.g.length){if(L(v)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var m=R,y=p;0>=y.l(v);)m=Ct(m),y=Ct(y);var E=it(m,1),I=it(y,1);for(y=it(y,2),m=it(m,2);!k(y);){var g=I.add(y);0>=g.l(v)&&(E=E.add(m),I=g),y=it(y,1),m=it(m,1)}return p=X(v,E.j(p)),new Q(E,p)}for(E=A;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(m),g=I.j(p);L(g)||0<g.l(v);)m-=y,I=f(m),g=I.j(p);k(I)&&(I=R),E=E.add(I),v=X(v,g)}return new Q(E,v)}n.A=function(v){return nt(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&v.i(y);return new u(m,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|v.i(y);return new u(m,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^v.i(y);return new u(m,this.h^v.h)};function Ct(v){for(var p=v.g.length+1,m=[],y=0;y<p;y++)m[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(m,v.h)}function it(v,p){var m=p>>5;p%=32;for(var y=v.g.length-m,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+m)>>>p|v.i(I+m+1)<<32-p:v.i(I+m);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,So=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Qt=u}).apply(typeof ks<"u"?ks:typeof self<"u"?self:typeof window<"u"?window:{});var Cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Po,Vo,$e,bo,Dn,Ur,Do,No,ko;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,h){return i==Array.prototype||i==Object.prototype||(i[a]=h.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cn=="object"&&Cn];for(var a=0;a<i.length;++a){var h=i[a];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var h=r;i=i.split(".");for(var l=0;l<i.length-1;l++){var T=i[l];if(!(T in h))break t;h=h[T]}i=i[i.length-1],l=h[i],a=a(l),a!=l&&a!=null&&t(h,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var h=0,l=!1,T={next:function(){if(!l&&h<i.length){var w=h++;return{value:a(w,i[w]),done:!1}}return l=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function _(i,a,h){return i.call.apply(i.bind,arguments)}function A(i,a,h){if(!i)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,l),i.apply(a,T)}}return function(){return i.apply(a,arguments)}}function R(i,a,h){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function V(i,a){var h=Array.prototype.slice.call(arguments,1);return function(){var l=h.slice();return l.push.apply(l,arguments),i.apply(this,l)}}function k(i,a){function h(){}h.prototype=a.prototype,i.aa=a.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(l,T,w){for(var S=Array(arguments.length-2),z=2;z<arguments.length;z++)S[z-2]=arguments[z];return a.prototype[T].apply(l,S)}}function L(i){const a=i.length;if(0<a){const h=Array(a);for(let l=0;l<a;l++)h[l]=i[l];return h}return[]}function D(i,a){for(let h=1;h<arguments.length;h++){const l=arguments[h];if(d(l)){const T=i.length||0,w=l.length||0;i.length=T+w;for(let S=0;S<w;S++)i[T+S]=l[S]}else i.push(l)}}class X{constructor(a,h){this.i=a,this.j=h,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(i){return/^[\s\xa0]*$/.test(i)}function Q(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function nt(i){return nt[" "](i),i}nt[" "]=function(){};var Ct=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function it(i,a,h){for(const l in i)a.call(h,i[l],l,i)}function v(i,a){for(const h in i)a.call(void 0,i[h],h,i)}function p(i){const a={};for(const h in i)a[h]=i[h];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let h,l;for(let T=1;T<arguments.length;T++){l=arguments[T];for(h in l)i[h]=l[h];for(let w=0;w<m.length;w++)h=m[w],Object.prototype.hasOwnProperty.call(l,h)&&(i[h]=l[h])}}function E(i){var a=1;i=i.split(":");const h=[];for(;0<a&&i.length;)h.push(i.shift()),a--;return i.length&&h.push(i.join(":")),h}function I(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Zn;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class St{constructor(){this.h=this.g=null}add(a,h){const l=we.get();l.set(a,h),this.h?this.h.next=l:this.g=l,this.h=l}}var we=new X(()=>new Va,i=>i.reset());class Va{constructor(){this.next=this.g=this.h=null}set(a,h){this.h=a,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Re=!1,Zn=new St,Ii=()=>{const i=c.Promise.resolve(void 0);Ae=()=>{i.then(ba)}};var ba=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(h){I(h)}var a=we;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Re=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var Da=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};c.addEventListener("test",h,a),c.removeEventListener("test",h,a)}catch{}return i}();function Ce(i,a){if(ut.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,l=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Ct){t:{try{nt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else h=="mouseover"?a=i.fromElement:h=="mouseout"&&(a=i.toElement);this.relatedTarget=a,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Na[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ce.aa.h.call(this)}}k(Ce,ut);var Na={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Se="closure_listenable_"+(1e6*Math.random()|0),ka=0;function Ma(i,a,h,l,T){this.listener=i,this.proxy=null,this.src=a,this.type=h,this.capture=!!l,this.ha=T,this.key=++ka,this.da=this.fa=!1}function hn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function cn(i){this.src=i,this.g={},this.h=0}cn.prototype.add=function(i,a,h,l,T){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var S=er(i,a,l,T);return-1<S?(a=i[S],h||(a.fa=!1)):(a=new Ma(a,this.src,w,!!l,T),a.fa=h,i.push(a)),a};function tr(i,a){var h=a.type;if(h in i.g){var l=i.g[h],T=Array.prototype.indexOf.call(l,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(l,T,1),w&&(hn(a),i.g[h].length==0&&(delete i.g[h],i.h--))}}function er(i,a,h,l){for(var T=0;T<i.length;++T){var w=i[T];if(!w.da&&w.listener==a&&w.capture==!!h&&w.ha==l)return T}return-1}var nr="closure_lm_"+(1e6*Math.random()|0),rr={};function wi(i,a,h,l,T){if(l&&l.once)return Ri(i,a,h,l,T);if(Array.isArray(a)){for(var w=0;w<a.length;w++)wi(i,a[w],h,l,T);return null}return h=ar(h),i&&i[Se]?i.K(a,h,f(l)?!!l.capture:!!l,T):Ai(i,a,h,!1,l,T)}function Ai(i,a,h,l,T,w){if(!a)throw Error("Invalid event type");var S=f(T)?!!T.capture:!!T,z=sr(i);if(z||(i[nr]=z=new cn(i)),h=z.add(a,h,l,S,w),h.proxy)return h;if(l=Oa(),h.proxy=l,l.src=i,l.listener=h,i.addEventListener)Da||(T=S),T===void 0&&(T=!1),i.addEventListener(a.toString(),l,T);else if(i.attachEvent)i.attachEvent(Si(a.toString()),l);else if(i.addListener&&i.removeListener)i.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Oa(){function i(h){return a.call(i.src,i.listener,h)}const a=xa;return i}function Ri(i,a,h,l,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Ri(i,a[w],h,l,T);return null}return h=ar(h),i&&i[Se]?i.L(a,h,f(l)?!!l.capture:!!l,T):Ai(i,a,h,!0,l,T)}function Ci(i,a,h,l,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)Ci(i,a[w],h,l,T);else l=f(l)?!!l.capture:!!l,h=ar(h),i&&i[Se]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],h=er(w,h,l,T),-1<h&&(hn(w[h]),Array.prototype.splice.call(w,h,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=sr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=er(a,h,l,T)),(h=-1<i?a[i]:null)&&ir(h))}function ir(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[Se])tr(a.i,i);else{var h=i.type,l=i.proxy;a.removeEventListener?a.removeEventListener(h,l,i.capture):a.detachEvent?a.detachEvent(Si(h),l):a.addListener&&a.removeListener&&a.removeListener(l),(h=sr(a))?(tr(h,i),h.h==0&&(h.src=null,a[nr]=null)):hn(i)}}}function Si(i){return i in rr?rr[i]:rr[i]="on"+i}function xa(i,a){if(i.da)i=!0;else{a=new Ce(a,this);var h=i.listener,l=i.ha||i.src;i.fa&&ir(i),i=h.call(l,a)}return i}function sr(i){return i=i[nr],i instanceof cn?i:null}var or="__closure_events_fn_"+(1e9*Math.random()>>>0);function ar(i){return typeof i=="function"?i:(i[or]||(i[or]=function(a){return i.handleEvent(a)}),i[or])}function ht(){Dt.call(this),this.i=new cn(this),this.M=this,this.F=null}k(ht,Dt),ht.prototype[Se]=!0,ht.prototype.removeEventListener=function(i,a,h,l){Ci(this,i,a,h,l)};function mt(i,a){var h,l=i.F;if(l)for(h=[];l;l=l.F)h.push(l);if(i=i.M,l=a.type||a,typeof a=="string")a=new ut(a,i);else if(a instanceof ut)a.target=a.target||i;else{var T=a;a=new ut(l,i),y(a,T)}if(T=!0,h)for(var w=h.length-1;0<=w;w--){var S=a.g=h[w];T=ln(S,l,!0,a)&&T}if(S=a.g=i,T=ln(S,l,!0,a)&&T,T=ln(S,l,!1,a)&&T,h)for(w=0;w<h.length;w++)S=a.g=h[w],T=ln(S,l,!1,a)&&T}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var h=i.g[a],l=0;l<h.length;l++)hn(h[l]);delete i.g[a],i.h--}}this.F=null},ht.prototype.K=function(i,a,h,l){return this.i.add(String(i),a,!1,h,l)},ht.prototype.L=function(i,a,h,l){return this.i.add(String(i),a,!0,h,l)};function ln(i,a,h,l){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==h){var z=S.listener,st=S.ha||S.src;S.fa&&tr(i.i,S),T=z.call(st,l)!==!1&&T}}return T&&!l.defaultPrevented}function Pi(i,a,h){if(typeof i=="function")h&&(i=R(i,h));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Vi(i){i.g=Pi(()=>{i.g=null,i.i&&(i.i=!1,Vi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class La extends Dt{constructor(a,h){super(),this.m=a,this.l=h,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Vi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(i){Dt.call(this),this.h=i,this.g={}}k(Pe,Dt);var bi=[];function Di(i){it(i.g,function(a,h){this.g.hasOwnProperty(h)&&ir(a)},i),i.g={}}Pe.prototype.N=function(){Pe.aa.N.call(this),Di(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ur=c.JSON.stringify,Fa=c.JSON.parse,Ua=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function hr(){}hr.prototype.h=null;function Ni(i){return i.h||(i.h=i.i())}function ki(){}var Ve={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cr(){ut.call(this,"d")}k(cr,ut);function lr(){ut.call(this,"c")}k(lr,ut);var jt={},Mi=null;function dn(){return Mi=Mi||new ht}jt.La="serverreachability";function Oi(i){ut.call(this,jt.La,i)}k(Oi,ut);function be(i){const a=dn();mt(a,new Oi(a))}jt.STAT_EVENT="statevent";function xi(i,a){ut.call(this,jt.STAT_EVENT,i),this.stat=a}k(xi,ut);function _t(i){const a=dn();mt(a,new xi(a,i))}jt.Ma="timingevent";function Li(i,a){ut.call(this,jt.Ma,i),this.size=a}k(Li,ut);function De(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Ne(){this.g=!0}Ne.prototype.xa=function(){this.g=!1};function Ba(i,a,h,l,T,w){i.info(function(){if(i.g)if(w)for(var S="",z=w.split("&"),st=0;st<z.length;st++){var j=z[st].split("=");if(1<j.length){var ct=j[0];j=j[1];var lt=ct.split("_");S=2<=lt.length&&lt[1]=="type"?S+(ct+"="+j+"&"):S+(ct+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+l+") [attempt "+T+"]: "+a+`
`+h+`
`+S})}function qa(i,a,h,l,T,w,S){i.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+T+"]: "+a+`
`+h+`
`+w+" "+S})}function ee(i,a,h,l){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+$a(i,h)+(l?" "+l:"")})}function ja(i,a){i.info(function(){return"TIMEOUT: "+a})}Ne.prototype.info=function(){};function $a(i,a){if(!i.g)return a;if(!a)return null;try{var h=JSON.parse(a);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var l=h[i];if(!(2>l.length)){var T=l[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<T.length;S++)T[S]=""}}}}return ur(h)}catch{return a}}var fn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dr;function pn(){}k(pn,hr),pn.prototype.g=function(){return new XMLHttpRequest},pn.prototype.i=function(){return{}},dr=new pn;function Nt(i,a,h,l){this.j=i,this.i=a,this.l=h,this.R=l||1,this.U=new Pe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ui}function Ui(){this.i=null,this.g="",this.h=!1}var Bi={},fr={};function pr(i,a,h){i.L=1,i.v=yn(Pt(a)),i.m=h,i.P=!0,qi(i,null)}function qi(i,a){i.F=Date.now(),gn(i),i.A=Pt(i.v);var h=i.A,l=i.R;Array.isArray(l)||(l=[String(l)]),es(h.i,"t",l),i.C=0,h=i.j.J,i.h=new Ui,i.g=Es(i.j,h?a:null,!i.m),0<i.O&&(i.M=new La(R(i.Y,i,i.g),i.O)),a=i.U,h=i.g,l=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(bi[0]=T.toString()),T=bi);for(var w=0;w<T.length;w++){var S=wi(h,T[w],l||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),be(),Ba(i.i,i.u,i.A,i.l,i.R,i.m)}Nt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Vt(i)==3?a.j():this.Y(i)},Nt.prototype.Y=function(i){try{if(i==this.g)t:{const lt=Vt(this.g);var a=this.g.Ba();const ie=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||us(this.g)))){this.J||lt!=4||a==7||(a==8||0>=ie?be(3):be(2)),gr(this);var h=this.g.Z();this.X=h;e:if(ji(this)){var l=us(this.g);i="";var T=l.length,w=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),ke(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,i+=this.h.i.decode(l[a],{stream:!(w&&a==T-1)});l.length=0,this.h.g+=i,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=h==200,qa(this.i,this.u,this.A,this.l,this.R,lt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var z,st=this.g;if((z=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(z)){var j=z;break e}}j=null}if(h=j)ee(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mr(this,h);else{this.o=!1,this.s=3,_t(12),$t(this),ke(this);break t}}if(this.P){h=!0;let Tt;for(;!this.J&&this.C<S.length;)if(Tt=za(this,S),Tt==fr){lt==4&&(this.s=4,_t(14),h=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Bi){this.s=4,_t(15),ee(this.i,this.l,S,"[Invalid Chunk]"),h=!1;break}else ee(this.i,this.l,Tt,null),mr(this,Tt);if(ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||S.length!=0||this.h.h||(this.s=1,_t(16),h=!1),this.o=this.o&&h,!h)ee(this.i,this.l,S,"[Invalid Chunked Response]"),$t(this),ke(this);else if(0<S.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Ir(ct),ct.M=!0,_t(11))}}else ee(this.i,this.l,S,null),mr(this,S);lt==4&&$t(this),this.o&&!this.J&&(lt==4?gs(this.j,this):(this.o=!1,gn(this)))}else au(this.g),h==400&&0<S.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),$t(this),ke(this)}}}catch{}finally{}};function ji(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function za(i,a){var h=i.C,l=a.indexOf(`
`,h);return l==-1?fr:(h=Number(a.substring(h,l)),isNaN(h)?Bi:(l+=1,l+h>a.length?fr:(a=a.slice(l,l+h),i.C=l+h,a)))}Nt.prototype.cancel=function(){this.J=!0,$t(this)};function gn(i){i.S=Date.now()+i.I,$i(i,i.I)}function $i(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=De(R(i.ba,i),a)}function gr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Nt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(ja(this.i,this.A),this.L!=2&&(be(),_t(17)),$t(this),this.s=2,ke(this)):$i(this,this.S-i)};function ke(i){i.j.G==0||i.J||gs(i.j,i)}function $t(i){gr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Di(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function mr(i,a){try{var h=i.j;if(h.G!=0&&(h.g==i||_r(h.h,i))){if(!i.K&&_r(h.h,i)&&h.G==3){try{var l=h.Da.g.parse(a)}catch{l=null}if(Array.isArray(l)&&l.length==3){var T=l;if(T[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)wn(h),Tn(h);else break t;Tr(h),_t(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=De(R(h.Za,h),6e3));if(1>=Ki(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Gt(h,11)}else if((i.K||h.g==i)&&wn(h),!H(a))for(T=h.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(h.T=j[0],j=j[1],h.G==2)if(j[0]=="c"){h.K=j[1],h.ia=j[2];const ct=j[3];ct!=null&&(h.la=ct,h.j.info("VER="+h.la));const lt=j[4];lt!=null&&(h.Aa=lt,h.j.info("SVER="+h.Aa));const ie=j[5];ie!=null&&typeof ie=="number"&&0<ie&&(l=1.5*ie,h.L=l,h.j.info("backChannelRequestTimeoutMs_="+l)),l=h;const Tt=i.g;if(Tt){const Rn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rn){var w=l.h;w.g||Rn.indexOf("spdy")==-1&&Rn.indexOf("quic")==-1&&Rn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(yr(w,w.h),w.h=null))}if(l.D){const wr=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;wr&&(l.ya=wr,G(l.I,l.D,wr))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),l=h;var S=i;if(l.qa=ys(l,l.J?l.ia:null,l.W),S.K){Hi(l.h,S);var z=S,st=l.L;st&&(z.I=st),z.B&&(gr(z),gn(z)),l.g=S}else fs(l);0<h.i.length&&In(h)}else j[0]!="stop"&&j[0]!="close"||Gt(h,7);else h.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Gt(h,7):vr(h):j[0]!="noop"&&h.l&&h.l.ta(j),h.v=0)}}be(4)}catch{}}var Ga=class{constructor(i,a){this.g=i,this.map=a}};function zi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ki(i){return i.h?1:i.g?i.g.size:0}function _r(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function yr(i,a){i.g?i.g.add(a):i.h=a}function Hi(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}zi.prototype.cancel=function(){if(this.i=Qi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Qi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const h of i.g.values())a=a.concat(h.D);return a}return L(i.i)}function Ka(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],h=i.length,l=0;l<h;l++)a.push(i[l]);return a}a=[],h=0;for(l in i)a[h++]=i[l];return a}function Ha(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var h=0;h<i;h++)a.push(h);return a}a=[],h=0;for(const l in i)a[h++]=l;return a}}}function Wi(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var h=Ha(i),l=Ka(i),T=l.length,w=0;w<T;w++)a.call(void 0,l[w],h&&h[w],i)}var Xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qa(i,a){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var l=i[h].indexOf("="),T=null;if(0<=l){var w=i[h].substring(0,l);T=i[h].substring(l+1)}else w=i[h];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function zt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof zt){this.h=i.h,mn(this,i.j),this.o=i.o,this.g=i.g,_n(this,i.s),this.l=i.l;var a=i.i,h=new xe;h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),Yi(this,h),this.m=i.m}else i&&(a=String(i).match(Xi))?(this.h=!1,mn(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),_n(this,a[4]),this.l=Me(a[5]||"",!0),Yi(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.h=!1,this.i=new xe(null,this.h))}zt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Oe(a,Ji,!0),":");var h=this.g;return(h||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Oe(a,Ji,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Oe(h,h.charAt(0)=="/"?Ya:Xa,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Oe(h,Za)),i.join("")};function Pt(i){return new zt(i)}function mn(i,a,h){i.j=h?Me(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function _n(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Yi(i,a,h){a instanceof xe?(i.i=a,tu(i.i,i.h)):(h||(a=Oe(a,Ja)),i.i=new xe(a,i.h))}function G(i,a,h){i.i.set(a,h)}function yn(i){return G(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Me(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Oe(i,a,h){return typeof i=="string"?(i=encodeURI(i).replace(a,Wa),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Wa(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ji=/[#\/\?@]/g,Xa=/[#\?:]/g,Ya=/[#\?]/g,Ja=/[#\?@]/g,Za=/#/g;function xe(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function kt(i){i.g||(i.g=new Map,i.h=0,i.i&&Qa(i.i,function(a,h){i.add(decodeURIComponent(a.replace(/\+/g," ")),h)}))}n=xe.prototype,n.add=function(i,a){kt(this),this.i=null,i=ne(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(a),this.h+=1,this};function Zi(i,a){kt(i),a=ne(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function ts(i,a){return kt(i),a=ne(i,a),i.g.has(a)}n.forEach=function(i,a){kt(this),this.g.forEach(function(h,l){h.forEach(function(T){i.call(a,T,l,this)},this)},this)},n.na=function(){kt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),h=[];for(let l=0;l<a.length;l++){const T=i[l];for(let w=0;w<T.length;w++)h.push(a[l])}return h},n.V=function(i){kt(this);let a=[];if(typeof i=="string")ts(this,i)&&(a=a.concat(this.g.get(ne(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)a=a.concat(i[h])}return a},n.set=function(i,a){return kt(this),this.i=null,i=ne(this,i),ts(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function es(i,a,h){Zi(i,a),0<h.length&&(i.i=null,i.g.set(ne(i,a),L(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var h=0;h<a.length;h++){var l=a[h];const w=encodeURIComponent(String(l)),S=this.V(l);for(l=0;l<S.length;l++){var T=w;S[l]!==""&&(T+="="+encodeURIComponent(String(S[l]))),i.push(T)}}return this.i=i.join("&")};function ne(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function tu(i,a){a&&!i.j&&(kt(i),i.i=null,i.g.forEach(function(h,l){var T=l.toLowerCase();l!=T&&(Zi(this,l),es(this,T,h))},i)),i.j=a}function eu(i,a){const h=new Ne;if(c.Image){const l=new Image;l.onload=V(Mt,h,"TestLoadImage: loaded",!0,a,l),l.onerror=V(Mt,h,"TestLoadImage: error",!1,a,l),l.onabort=V(Mt,h,"TestLoadImage: abort",!1,a,l),l.ontimeout=V(Mt,h,"TestLoadImage: timeout",!1,a,l),c.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=i}else a(!1)}function nu(i,a){const h=new Ne,l=new AbortController,T=setTimeout(()=>{l.abort(),Mt(h,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:l.signal}).then(w=>{clearTimeout(T),w.ok?Mt(h,"TestPingServer: ok",!0,a):Mt(h,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Mt(h,"TestPingServer: error",!1,a)})}function Mt(i,a,h,l,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),l(h)}catch{}}function ru(){this.g=new Ua}function iu(i,a,h){const l=h||"";try{Wi(i,function(T,w){let S=T;f(T)&&(S=ur(T)),a.push(l+w+"="+encodeURIComponent(S))})}catch(T){throw a.push(l+"type="+encodeURIComponent("_badmap")),T}}function Le(i){this.l=i.Ub||null,this.j=i.eb||!1}k(Le,hr),Le.prototype.g=function(){return new En(this.l,this.j)},Le.prototype.i=function(i){return function(){return i}}({});function En(i,a){ht.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(En,ht),n=En.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,Ue(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fe(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ue(this)),this.g&&(this.readyState=3,Ue(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ns(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ns(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Fe(this):Ue(this),this.readyState==3&&ns(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Fe(this))},n.Qa=function(i){this.g&&(this.response=i,Fe(this))},n.ga=function(){this.g&&Fe(this)};function Fe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Ue(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var h=a.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=a.next();return i.join(`\r
`)};function Ue(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(En.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function rs(i){let a="";return it(i,function(h,l){a+=l,a+=":",a+=h,a+=`\r
`}),a}function Er(i,a,h){t:{for(l in h){var l=!1;break t}l=!0}l||(h=rs(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):G(i,a,h))}function W(i){ht.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(W,ht);var su=/^https?$/i,ou=["POST","PUT"];n=W.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,h,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dr.g(),this.v=this.o?Ni(this.o):Ni(dr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){is(this,w);return}if(i=h||"",h=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var T in l)h.set(T,l[T]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const w of l.keys())h.set(w,l.get(w));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(h.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ou,a,void 0))||l||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of h)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{as(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){is(this,w)}};function is(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,ss(i),vn(i)}function ss(i){i.A||(i.A=!0,mt(i,"complete"),mt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,mt(this,"complete"),mt(this,"abort"),vn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?os(this):this.bb())},n.bb=function(){os(this)};function os(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Vt(i)!=4||i.Z()!=2)){if(i.u&&Vt(i)==4)Pi(i.Ea,0,i);else if(mt(i,"readystatechange"),Vt(i)==4){i.h=!1;try{const S=i.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var h;if(!(h=a)){var l;if(l=S===0){var T=String(i.D).match(Xi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),l=!su.test(T?T.toLowerCase():"")}h=l}if(h)mt(i,"complete"),mt(i,"success");else{i.m=6;try{var w=2<Vt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",ss(i)}}finally{vn(i)}}}}function vn(i,a){if(i.g){as(i);const h=i.g,l=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||mt(i,"ready");try{h.onreadystatechange=l}catch{}}}function as(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Vt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Fa(a)}};function us(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function au(i){const a={};i=(i.g&&2<=Vt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<i.length;l++){if(H(i[l]))continue;var h=E(i[l]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const w=a[T]||[];a[T]=w,w.push(h)}v(a,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Be(i,a,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||a}function hs(i){this.Aa=0,this.i=[],this.j=new Ne,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Be("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Be("baseRetryDelayMs",5e3,i),this.cb=Be("retryDelaySeedMs",1e4,i),this.Wa=Be("forwardChannelMaxRetries",2,i),this.wa=Be("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(i&&i.concurrentRequestLimit),this.Da=new ru,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hs.prototype,n.la=8,n.G=1,n.connect=function(i,a,h,l){_t(0),this.W=i,this.H=a||{},h&&l!==void 0&&(this.H.OSID=h,this.H.OAID=l),this.F=this.X,this.I=ys(this,null,this.W),In(this)};function vr(i){if(cs(i),i.G==3){var a=i.U++,h=Pt(i.I);if(G(h,"SID",i.K),G(h,"RID",a),G(h,"TYPE","terminate"),qe(i,h),a=new Nt(i,i.j,a),a.L=2,a.v=yn(Pt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=a.v,h=!0),h||(a.g=Es(a.j,null),a.g.ea(a.v)),a.F=Date.now(),gn(a)}_s(i)}function Tn(i){i.g&&(Ir(i),i.g.cancel(),i.g=null)}function cs(i){Tn(i),i.u&&(c.clearTimeout(i.u),i.u=null),wn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function In(i){if(!Gi(i.h)&&!i.s){i.s=!0;var a=i.Ga;Ae||Ii(),Re||(Ae(),Re=!0),Zn.add(a,i),i.B=0}}function uu(i,a){return Ki(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=De(R(i.Ga,i,a),ms(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new Nt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,h=0;h<this.i.length;h++){e:{var l=this.i[h];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(a+=l,4096<a){a=h;break t}if(a===4096||h===this.i.length-1){a=h+1;break t}}a=1e3}else a=1e3;a=ds(this,T,a),h=Pt(this.I),G(h,"RID",i),G(h,"CVER",22),this.D&&G(h,"X-HTTP-Session-Id",this.D),qe(this,h),w&&(this.O?a="headers="+encodeURIComponent(String(rs(w)))+"&"+a:this.m&&Er(h,this.m,w)),yr(this.h,T),this.Ua&&G(h,"TYPE","init"),this.P?(G(h,"$req",a),G(h,"SID","null"),T.T=!0,pr(T,h,null)):pr(T,h,a),this.G=2}}else this.G==3&&(i?ls(this,i):this.i.length==0||Gi(this.h)||ls(this))};function ls(i,a){var h;a?h=a.l:h=i.U++;const l=Pt(i.I);G(l,"SID",i.K),G(l,"RID",h),G(l,"AID",i.T),qe(i,l),i.m&&i.o&&Er(l,i.m,i.o),h=new Nt(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),a&&(i.i=a.D.concat(i.i)),a=ds(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),yr(i.h,h),pr(h,l,a)}function qe(i,a){i.H&&it(i.H,function(h,l){G(a,l,h)}),i.l&&Wi({},function(h,l){G(a,l,h)})}function ds(i,a,h){h=Math.min(i.i.length,h);var l=i.l?R(i.l.Na,i.l,i):null;t:{var T=i.i;let w=-1;for(;;){const S=["count="+h];w==-1?0<h?(w=T[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let z=!0;for(let st=0;st<h;st++){let j=T[st].g;const ct=T[st].map;if(j-=w,0>j)w=Math.max(0,T[st].g-100),z=!1;else try{iu(ct,S,"req"+j+"_")}catch{l&&l(ct)}}if(z){l=S.join("&");break t}}}return i=i.i.splice(0,h),a.D=i,l}function fs(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Ae||Ii(),Re||(Ae(),Re=!0),Zn.add(a,i),i.v=0}}function Tr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=De(R(i.Fa,i),ms(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ps(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=De(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Tn(this),ps(this))};function Ir(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function ps(i){i.g=new Nt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Pt(i.qa);G(a,"RID","rpc"),G(a,"SID",i.K),G(a,"AID",i.T),G(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&G(a,"TO",i.ja),G(a,"TYPE","xmlhttp"),qe(i,a),i.m&&i.o&&Er(a,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=yn(Pt(a)),h.m=null,h.P=!0,qi(h,i)}n.Za=function(){this.C!=null&&(this.C=null,Tn(this),Tr(this),_t(19))};function wn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function gs(i,a){var h=null;if(i.g==a){wn(i),Ir(i),i.g=null;var l=2}else if(_r(i.h,a))h=a.D,Hi(i.h,a),l=1;else return;if(i.G!=0){if(a.o)if(l==1){h=a.m?a.m.length:0,a=Date.now()-a.F;var T=i.B;l=dn(),mt(l,new Li(l,h)),In(i)}else fs(i);else if(T=a.s,T==3||T==0&&0<a.X||!(l==1&&uu(i,a)||l==2&&Tr(i)))switch(h&&0<h.length&&(a=i.h,a.i=a.i.concat(h)),T){case 1:Gt(i,5);break;case 4:Gt(i,10);break;case 3:Gt(i,6);break;default:Gt(i,2)}}}function ms(i,a){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*a}function Gt(i,a){if(i.j.info("Error code "+a),a==2){var h=R(i.fb,i),l=i.Xa;const T=!l;l=new zt(l||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||mn(l,"https"),yn(l),T?eu(l.toString(),h):nu(l.toString(),h)}else _t(2);i.G=0,i.l&&i.l.sa(a),_s(i),cs(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function _s(i){if(i.G=0,i.ka=[],i.l){const a=Qi(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function ys(i,a,h){var l=h instanceof zt?Pt(h):new zt(h);if(l.g!="")a&&(l.g=a+"."+l.g),_n(l,l.s);else{var T=c.location;l=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new zt(null);l&&mn(w,l),a&&(w.g=a),T&&_n(w,T),h&&(w.l=h),l=w}return h=i.D,a=i.ya,h&&a&&G(l,h,a),G(l,"VER",i.la),qe(i,l),l}function Es(i,a,h){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new W(new Le({eb:h})):new W(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function vs(){}n=vs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function An(){}An.prototype.g=function(i,a){return new vt(i,a)};function vt(i,a){ht.call(this),this.g=new hs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!H(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new re(this)}k(vt,ht),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){vr(this.g)},vt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=ur(i),i=h);a.i.push(new Ga(a.Ya++,i)),a.G==3&&In(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,vt.aa.N.call(this)};function Ts(i){cr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const h in a){i=h;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}k(Ts,cr);function Is(){lr.call(this),this.status=1}k(Is,lr);function re(i){this.g=i}k(re,vs),re.prototype.ua=function(){mt(this.g,"a")},re.prototype.ta=function(i){mt(this.g,new Ts(i))},re.prototype.sa=function(i){mt(this.g,new Is)},re.prototype.ra=function(){mt(this.g,"b")},An.prototype.createWebChannel=An.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,ko=function(){return new An},No=function(){return dn()},Do=jt,Ur={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fn.NO_ERROR=0,fn.TIMEOUT=8,fn.HTTP_ERROR=6,Dn=fn,Fi.COMPLETE="complete",bo=Fi,ki.EventType=Ve,Ve.OPEN="a",Ve.CLOSE="b",Ve.ERROR="c",Ve.MESSAGE="d",ht.prototype.listen=ht.prototype.K,$e=ki,Vo=Le,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,Po=W}).apply(typeof Cn<"u"?Cn:typeof self<"u"?self:typeof window<"u"?window:{});const Ms="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new To("@firebase/firestore");function je(){return Jt.logLevel}function b(n,...t){if(Jt.logLevel<=U.DEBUG){const e=t.map(ei);Jt.debug(`Firestore (${Ee}): ${n}`,...e)}}function bt(n,...t){if(Jt.logLevel<=U.ERROR){const e=t.map(ei);Jt.error(`Firestore (${Ee}): ${n}`,...e)}}function de(n,...t){if(Jt.logLevel<=U.WARN){const e=t.map(ei);Jt.warn(`Firestore (${Ee}): ${n}`,...e)}}function ei(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+n;throw bt(t),new Error(t)}function tt(n,t){n||x()}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class Xh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Yh{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new Mo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new ft(t)}}class Jh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Jh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ec{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new tc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=nc(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function fe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Et.fromMillis(Date.now())}static fromDate(t){return Et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Et(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new Et(0,0))}static max(){return new O(new Et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Je.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Je?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class K extends Je{construct(t,e,r){return new K(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new K(e)}static emptyPath(){return new K([])}}const ic=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Je{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return ic.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(r+=c,s++):(o(),s++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(K.fromString(t))}static fromName(t){return new M(K.fromString(t).popFirst(5))}static empty(){return new M(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&K.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return K.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new K(t.slice()))}}function sc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=O.fromTimestamp(r===1e9?new Et(e+1,0):new Et(e,r));return new Ut(s,M.empty(),t)}function oc(n){return new Ut(n.readTime,n.key,-1)}class Ut{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ut(O.min(),M.empty(),-1)}static max(){return new Ut(O.max(),M.empty(),-1)}}function ac(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==uc)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},d=>r(d))}),u=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++c,c===o&&r(u)},_=>s(_))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function cc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function nn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ri.oe=-1;function zn(n){return n==null}function Br(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Gn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function lc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sn(this.root,t,this.comparator,!0)}}class Sn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ot(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xs(this.data.getIterator())}getIteratorFrom(t){return new xs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class xs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new at(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Oo("Invalid base64 string: "+o):o}}(t);return new gt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const dc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(tt(!!n),typeof n=="string"){let t=0;const e=dc.exec(n);if(tt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?gt.fromBase64String(n):gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function si(n){const t=n.mapValue.fields.__previous_value__;return ii(t)?si(t):t}function Ze(n){const t=Bt(n.mapValue.fields.__local_write_time__.timestampValue);return new Et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,r,s,o,u,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}class tn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof tn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function te(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ii(n)?4:pc(n)?9007199254740991:10:x()}function At(n,t){if(n===t)return!0;const e=te(n);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ze(n).isEqual(Ze(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Bt(s.timestampValue),c=Bt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Zt(s.bytesValue).isEqual(Zt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=Z(s.doubleValue),c=Z(o.doubleValue);return u===c?Br(u)===Br(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return fe(n.arrayValue.values||[],t.arrayValue.values||[],At);case 10:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Os(u)!==Os(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!At(u[d],c[d])))return!1;return!0}(n,t);default:return x()}}function en(n,t){return(n.values||[]).find(e=>At(e,t))!==void 0}function pe(n,t){if(n===t)return 0;const e=te(n),r=te(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=Z(o.integerValue||o.doubleValue),d=Z(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return Ls(n.timestampValue,t.timestampValue);case 4:return Ls(Ze(n),Ze(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,u){const c=Zt(o),d=Zt(u);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),d=u.split("/");for(let f=0;f<c.length&&f<d.length;f++){const _=$(c[f],d[f]);if(_!==0)return _}return $(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=$(Z(o.latitude),Z(u.latitude));return c!==0?c:$(Z(o.longitude),Z(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,u){const c=o.values||[],d=u.values||[];for(let f=0;f<c.length&&f<d.length;++f){const _=pe(c[f],d[f]);if(_)return _}return $(c.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===Pn.mapValue&&u===Pn.mapValue)return 0;if(o===Pn.mapValue)return 1;if(u===Pn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let A=0;A<d.length&&A<_.length;++A){const R=$(d[A],_[A]);if(R!==0)return R;const V=pe(c[d[A]],f[_[A]]);if(V!==0)return V}return $(d.length,_.length)}(n.mapValue,t.mapValue);default:throw x()}}function Ls(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=Bt(n),r=Bt(t),s=$(e.seconds,r.seconds);return s!==0?s:$(e.nanos,r.nanos)}function ge(n){return qr(n)}function qr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Bt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Zt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=qr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${qr(e.fields[u])}`;return s+"}"}(n.mapValue):x()}function jr(n){return!!n&&"integerValue"in n}function oi(n){return!!n&&"arrayValue"in n}function Fs(n){return!!n&&"nullValue"in n}function Us(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pr(n){return!!n&&"mapValue"in n}function Ke(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ke(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ke(n.arrayValue.values[e]);return t}return Object.assign({},n)}function pc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Pr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ke(e)}setAll(t){let e=yt.emptyPath(),r={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,s),r={},s=[],e=c.popLast()}u?r[c.lastSegment()]=Ke(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Pr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return At(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Pr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Gn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new It(Ke(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e,r,s,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new pt(t,0,O.min(),O.min(),O.min(),It.empty(),0)}static newFoundDocument(t,e,r,s){return new pt(t,1,e,O.min(),r,s,0)}static newNoDocument(t,e){return new pt(t,2,e,O.min(),O.min(),It.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,O.min(),O.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e){this.position=t,this.inclusive=e}}function Bs(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(u.referenceValue),e.key):r=pe(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function qs(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!At(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e="asc"){this.field=t,this.dir=e}}function gc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{}class et extends xo{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new _c(t,e,r):e==="array-contains"?new vc(t,r):e==="in"?new Tc(t,r):e==="not-in"?new Ic(t,r):e==="array-contains-any"?new wc(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new yc(t,r):new Ec(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(pe(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends xo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Rt(t,e)}matches(t){return Lo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Lo(n){return n.op==="and"}function Fo(n){return mc(n)&&Lo(n)}function mc(n){for(const t of n.filters)if(t instanceof Rt)return!1;return!0}function $r(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+ge(n.value);if(Fo(n))return n.filters.map(t=>$r(t)).join(",");{const t=n.filters.map(e=>$r(e)).join(",");return`${n.op}(${t})`}}function Uo(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&At(r.value,s.value)}(n,t):n instanceof Rt?function(r,s){return s instanceof Rt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,u,c)=>o&&Uo(u,s.filters[c]),!0):!1}(n,t):void x()}function Bo(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${ge(e.value)}`}(n):n instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Bo).join(" ,")+"}"}(n):"Filter"}class _c extends et{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class yc extends et{constructor(t,e){super(t,"in",e),this.keys=qo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ec extends et{constructor(t,e){super(t,"not-in",e),this.keys=qo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function qo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class vc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oi(e)&&en(e.arrayValue,this.value)}}class Tc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&en(this.value.arrayValue,e)}}class Ic extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(en(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!en(this.value.arrayValue,e)}}class wc extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>en(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e=null,r=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function js(n,t=null,e=[],r=[],s=null,o=null,u=null){return new Ac(n,t,e,r,s,o,u)}function ai(n){const t=q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>$r(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),zn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ge(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ge(r)).join(",")),t.ue=e}return t.ue}function ui(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!gc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Uo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!qs(n.startAt,t.startAt)&&qs(n.endAt,t.endAt)}function zr(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e=null,r=[],s=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rc(n,t,e,r,s,o,u,c){return new rn(n,t,e,r,s,o,u,c)}function jo(n){return new rn(n)}function $s(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Cc(n){return n.collectionGroup!==null}function He(n){const t=q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new at(yt.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Un(o,r))}),e.has(yt.keyField().canonicalString())||t.ce.push(new Un(yt.keyField(),r))}return t.ce}function wt(n){const t=q(n);return t.le||(t.le=Sc(t,He(n))),t.le}function Sc(n,t){if(n.limitType==="F")return js(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Un(s.field,o)});const e=n.endAt?new Fn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fn(n.startAt.position,n.startAt.inclusive):null;return js(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Gr(n,t,e){return new rn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Kn(n,t){return ui(wt(n),wt(t))&&n.limitType===t.limitType}function $o(n){return`${ai(wt(n))}|lt:${n.limitType}`}function se(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Bo(s)).join(", ")}]`),zn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>ge(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>ge(s)).join(",")),`Target(${r})`}(wt(n))}; limitType=${n.limitType})`}function Hn(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of He(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(u,c,d){const f=Bs(u,c,d);return u.inclusive?f<=0:f<0}(r.startAt,He(r),s)||r.endAt&&!function(u,c,d){const f=Bs(u,c,d);return u.inclusive?f>=0:f>0}(r.endAt,He(r),s))}(n,t)}function Pc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zo(n){return(t,e)=>{let r=!1;for(const s of He(n)){const o=Vc(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Vc(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const d=u.data.field(o),f=c.data.field(o);return d!==null&&f!==null?pe(d,f):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Gn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return lc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Y(M.comparator);function qt(){return bc}const Go=new Y(M.comparator);function ze(...n){let t=Go;for(const e of n)t=t.insert(e.key,e);return t}function Dc(n){let t=Go;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ht(){return Qe()}function Ko(){return Qe()}function Qe(){return new ve(n=>n.toString(),(n,t)=>n.isEqual(t))}const Nc=new at(M.comparator);function B(...n){let t=Nc;for(const e of n)t=t.add(e);return t}const kc=new at($);function Mc(){return kc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(t)?"-0":t}}function xc(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this._=void 0}}function Lc(n,t,e){return n instanceof Kr?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ii(o)&&(o=si(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Bn?Ho(n,t):n instanceof qn?Qo(n,t):function(s,o){const u=Uc(s,o),c=zs(u)+zs(s.Pe);return jr(u)&&jr(s.Pe)?xc(c):Oc(s.serializer,c)}(n,t)}function Fc(n,t,e){return n instanceof Bn?Ho(n,t):n instanceof qn?Qo(n,t):e}function Uc(n,t){return n instanceof Hr?function(r){return jr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Kr extends Qn{}class Bn extends Qn{constructor(t){super(),this.elements=t}}function Ho(n,t){const e=Wo(t);for(const r of n.elements)e.some(s=>At(s,r))||e.push(r);return{arrayValue:{values:e}}}class qn extends Qn{constructor(t){super(),this.elements=t}}function Qo(n,t){let e=Wo(t);for(const r of n.elements)e=e.filter(s=>!At(s,r));return{arrayValue:{values:e}}}class Hr extends Qn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function zs(n){return Z(n.integerValue||n.doubleValue)}function Wo(n){return oi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Bc(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Bn&&s instanceof Bn||r instanceof qn&&s instanceof qn?fe(r.elements,s.elements,At):r instanceof Hr&&s instanceof Hr?At(r.Pe,s.Pe):r instanceof Kr&&s instanceof Kr}(n.transform,t.transform)}class Xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xt}static exists(t){return new Xt(void 0,t)}static updateTime(t){return new Xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class hi{}function Xo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new jc(n.key,Xt.none()):new ci(n.key,n.data,Xt.none());{const e=n.data,r=It.empty();let s=new at(yt.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new Wn(n.key,r,new Ot(s.toArray()),Xt.none())}}function qc(n,t,e){n instanceof ci?function(s,o,u){const c=s.value.clone(),d=Ks(s.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Wn?function(s,o,u){if(!Nn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Ks(s.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Yo(s)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function We(n,t,e,r){return n instanceof ci?function(o,u,c,d){if(!Nn(o.precondition,u))return c;const f=o.value.clone(),_=Hs(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Wn?function(o,u,c,d){if(!Nn(o.precondition,u))return c;const f=Hs(o.fieldTransforms,d,u),_=u.data;return _.setAll(Yo(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,u,c){return Nn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Gs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fe(r,s,(o,u)=>Bc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ci extends hi{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wn extends hi{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Yo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ks(n,t,e){const r=new Map;tt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);r.set(o.field,Fc(u,c,e[s]))}return r}function Hs(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,Lc(o,u,t))}return r}class jc extends hi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&qc(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=We(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=We(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ko();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const d=Xo(u,c);d!==null&&r.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&fe(this.mutations,t.mutations,(e,r)=>Gs(e,r))&&fe(this.baseMutations,t.baseMutations,(e,r)=>Gs(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,F;function Jo(n){if(n===void 0)return bt("GRPC error has no .code"),P.UNKNOWN;switch(n){case J.OK:return P.OK;case J.CANCELLED:return P.CANCELLED;case J.UNKNOWN:return P.UNKNOWN;case J.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case J.INTERNAL:return P.INTERNAL;case J.UNAVAILABLE:return P.UNAVAILABLE;case J.UNAUTHENTICATED:return P.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case J.NOT_FOUND:return P.NOT_FOUND;case J.ALREADY_EXISTS:return P.ALREADY_EXISTS;case J.PERMISSION_DENIED:return P.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case J.ABORTED:return P.ABORTED;case J.OUT_OF_RANGE:return P.OUT_OF_RANGE;case J.UNIMPLEMENTED:return P.UNIMPLEMENTED;case J.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(F=J||(J={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Qt([4294967295,4294967295],0);function Qs(n){const t=Kc().encode(n),e=new So;return e.update(t),new Uint8Array(e.digest())}function Ws(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Qt([e,r],0),new Qt([s,o],0)]}class li{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ge(`Invalid padding: ${e}`);if(r<0)throw new Ge(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ge(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ge(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Qt.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Qt.fromNumber(r)));return s.compare(Hc)===1&&(s=new Qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Qs(t),[r,s]=Ws(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new li(o,s,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=Qs(t),[r,s]=Ws(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ge extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,sn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Xn(O.min(),s,new Y($),qt(),B())}}class sn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new sn(r,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Zo{constructor(t,e){this.targetId=t,this.me=e}}class ta{constructor(t,e,r=gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Xs{constructor(){this.fe=0,this.ge=Js(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=B(),e=B(),r=B();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x()}}),new sn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Js()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Qc{constructor(t){this.Le=t,this.Be=new Map,this.ke=qt(),this.qe=Ys(),this.Qe=new Y($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:x()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(zr(o))if(r===0){const u=new M(o.path);this.Ue(e,u,pt.newNoDocument(u,O.min()))}else tt(r===1);else{const u=this.Ye(e);if(u!==r){const c=this.Ze(t),d=c?this.Xe(c,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=Zt(r).toUint8Array()}catch(d){if(d instanceof Oo)return de("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new li(u,s,o)}catch(d){return de(d instanceof Ge?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Je(u);if(c){if(o.current&&zr(c.target)){const d=new M(c.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,pt.newNoDocument(d,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let r=B();this.qe.forEach((o,u)=>{let c=!0;u.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new Xn(t,e,this.Qe,this.ke,r);return this.ke=qt(),this.qe=Ys(),this.Qe=new Y($),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Xs,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new at($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Xs),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ys(){return new Y(M.comparator)}function Js(){return new Y(M.comparator)}const Wc={asc:"ASCENDING",desc:"DESCENDING"},Xc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yc={and:"AND",or:"OR"};class Jc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qr(n,t){return n.useProto3Json||zn(t)?t:{value:t}}function Zc(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function he(n){return tt(!!n),O.fromTimestamp(function(e){const r=Bt(e);return new Et(r.seconds,r.nanos)}(n))}function el(n,t){return Wr(n,t).canonicalString()}function Wr(n,t){const e=function(s){return new K(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ea(n){const t=K.fromString(n);return tt(oa(t)),t}function Vr(n,t){const e=ea(t);if(e.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(ra(e))}function na(n,t){return el(n.databaseId,t)}function nl(n){const t=ea(n);return t.length===4?K.emptyPath():ra(t)}function Zs(n){return new K(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ra(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rl(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(tt(_===void 0||typeof _=="string"),gt.fromBase64String(_||"")):(tt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),gt.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const _=f.code===void 0?P.UNKNOWN:Jo(f.code);return new N(_,f.message||"")}(u);e=new ta(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vr(n,r.document.name),o=he(r.document.updateTime),u=r.document.createTime?he(r.document.createTime):O.min(),c=new It({mapValue:{fields:r.document.fields}}),d=pt.newFoundDocument(s,o,u,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new kn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Vr(n,r.document),o=r.readTime?he(r.readTime):O.min(),u=pt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new kn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Vr(n,r.document),o=r.removedTargetIds||[];e=new kn([],o,s,null)}else{if(!("filter"in t))return x();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,u=new Gc(s,o),c=r.targetId;e=new Zo(c,u)}}return e}function il(n,t){return{documents:[na(n,t.path)]}}function sl(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=na(n,s);const o=function(f){if(f.length!==0)return sa(Rt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:oe(R.field),direction:ul(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=Qr(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function ol(n){let t=nl(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){tt(r===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=ia(A);return R instanceof Rt&&Fo(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(k){return new Un(ae(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,zn(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(A){const R=!!A.before,V=A.values||[];return new Fn(V,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,V=A.values||[];return new Fn(V,R)}(e.endAt)),Rc(t,s,u,o,c,"F",d,f)}function al(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ia(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ae(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ae(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ae(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ae(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return et.create(ae(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(r=>ia(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function ul(n){return Wc[n]}function hl(n){return Xc[n]}function cl(n){return Yc[n]}function oe(n){return{fieldPath:n.canonicalString()}}function ae(n){return yt.fromServerFormat(n.fieldPath)}function sa(n){return n instanceof et?function(e){if(e.op==="=="){if(Us(e.value))return{unaryFilter:{field:oe(e.field),op:"IS_NAN"}};if(Fs(e.value))return{unaryFilter:{field:oe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Us(e.value))return{unaryFilter:{field:oe(e.field),op:"IS_NOT_NAN"}};if(Fs(e.value))return{unaryFilter:{field:oe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oe(e.field),op:hl(e.op),value:e.value}}}(n):n instanceof Rt?function(e){const r=e.getFilters().map(s=>sa(s));return r.length===1?r[0]:{compositeFilter:{op:cl(e.op),filters:r}}}(n):x()}function oa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e,r,s,o=O.min(),u=O.min(),c=gt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t){this.ct=t}}function dl(n){const t=ol({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this._n=new pl}addToCollectionParentIndex(t,e){return this._n.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Ut.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class pl{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new at(K.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new at(K.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new me(0)}static Ln(){return new me(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.changes=new ve(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&We(r.mutation,s,Ot.empty(),Et.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,B()).next(()=>r))}getLocalViewOfDocuments(t,e,r=B()){const s=Ht();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let u=ze();return o.forEach((c,d)=>{u=u.insert(c,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Ht();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,B()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,s){let o=qt();const u=Qe(),c=function(){return Qe()}();return e.forEach((d,f)=>{const _=r.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof Wn)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),We(_.mutation,f,_.mutation.getFieldMask(),Et.now())):u.set(f.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var A;return c.set(f,new ml(_,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Qe();let s=new Y((u,c)=>u-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Ot.empty();_=c.applyToLocalView(f,_),r.set(d,_);const A=(s.get(c.batchId)||B()).add(d);s=s.insert(c.batchId,A)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,_=d.value,A=Ko();_.forEach(R=>{if(!o.has(R)){const V=Xo(e.get(R),r.get(R));V!==null&&A.set(R,V),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return C.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Cc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(Ht());let c=-1,d=o;return u.next(f=>C.forEach(f,(_,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,B())).next(_=>({batchId:c,changes:Dc(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=ze();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=ze();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,d=>{const f=function(A,R){return new rn(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(_=>{_.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,pt.newInvalidDocument(_)))});let c=ze();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&We(_.mutation,f,Ot.empty(),Et.now()),Hn(e,f)&&(c=c.insert(d,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return C.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:he(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:dl(s.bundledQuery),readTime:he(s.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.overlays=new Y(M.comparator),this.hr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ht();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=Ht(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Y((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Ht(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=Ht(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=s)););return C.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new zc(e,r));let o=this.hr.get(e);o===void 0&&(o=B(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.Pr=new at(rt.Ir),this.Tr=new at(rt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new rt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new M(new K([])),r=new rt(e,t),s=new rt(e,t+1),o=[];return this.Tr.forEachInRange([r,s],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new M(new K([])),r=new rt(e,t),s=new rt(e,t+1);let o=B();return this.Tr.forEachInRange([r,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new rt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return M.comparator(t.key,e.key)||$(t.pr,e.pr)}static Er(t,e){return $(t.pr,e.pr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new at(rt.Ir)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new $c(o,e,r,s);this.mutationQueue.push(u);for(const c of s)this.wr=this.wr.add(new rt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),s=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],u=>{const c=this.Sr(u.pr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at($);return e.forEach(s=>{const o=new rt(s,0),u=new rt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],c=>{r=r.add(c.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const u=new rt(new M(o),0);let c=new at($);return this.wr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(d.pr)),!0)},u),C.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){tt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(e.mutations,s=>{const o=new rt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new rt(e,0),s=this.wr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t){this.vr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():pt.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=qt();const u=e.path,c=new M(u.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||ac(oc(_),r)<=0||(s.has(_.key)||Hn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){x()}Fr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Il(this)}getSize(t){return C.resolve(this.size)}}class Il extends gl{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){this.persistence=t,this.Mr=new ve(e=>ai(e),ui),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Or=0,this.Nr=new di,this.targetCount=0,this.Lr=me.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),C.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new me(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.qn(e),C.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,e){this.Br={},this.overlays={},this.kr=new ri(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new wl(this),this.indexManager=new fl,this.remoteDocumentCache=function(s){return new Tl(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ll(e),this.$r=new yl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new El,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new vl(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){b("MemoryPersistence","Starting transaction:",t);const s=new Rl(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Rl extends hc{constructor(t){super(),this.currentSequenceNumber=t}}class fi{constructor(t){this.persistence=t,this.zr=new di,this.jr=null}static Hr(t){return new fi(t)}get Jr(){if(this.jr)return this.jr;throw x()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),C.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const s=M.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,O.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return C.or([()=>C.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=B(),s=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new pi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Du()?8:cc(Vu())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Cl;return this.Ji(t,e,u).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,u,c.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(je()<=U.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",se(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(je()<=U.DEBUG&&b("QueryEngine","Query:",se(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(je()<=U.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",se(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,wt(e))):C.resolve())}ji(t,e){if($s(e))return C.resolve(null);let r=wt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Gr(e,null,"F"),r=wt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=B(...o);return this.zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.Zi(e,c);return this.Xi(e,f,u,d.readTime)?this.ji(t,Gr(e,null,"F")):this.es(t,f,e,d)}))})))}Hi(t,e,r,s){return $s(e)||s.isEqual(O.min())?C.resolve(null):this.zi.getDocuments(t,r).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,r,s)?C.resolve(null):(je()<=U.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),se(e)),this.es(t,u,e,sc(s,-1)).next(c=>c))})}Zi(t,e){let r=new at(zo(t));return e.forEach((s,o)=>{Hn(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return je()<=U.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",se(e)),this.zi.getDocumentsMatchingQuery(t,e,Ut.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Y($),this.rs=new ve(o=>ai(o),ui),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _l(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Vl(n,t,e,r){return new Pl(n,t,e,r)}async function aa(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let d=B();for(const f of s){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next(f=>({us:f,removedBatchIds:u,addedBatchIds:c}))})})}function ua(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function bl(n,t){const e=q(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const c=[];t.targetChanges.forEach((_,A)=>{const R=s.get(A);if(!R)return;c.push(e.Qr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Qr.addMatchingKeys(o,_.addedDocuments,A)));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?V=V.withResumeToken(gt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):_.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(_.resumeToken,r)),s=s.insert(A,V),function(L,D,X){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(R,V,_)&&c.push(e.Qr.updateTargetData(o,V))});let d=qt(),f=B();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(Dl(o,u,t.documentUpdates).next(_=>{d=_.cs,f=_.ls})),!r.isEqual(O.min())){const _=e.Qr.getLastRemoteSnapshotVersion(o).next(A=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(_)}return C.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ns=s,o))}function Dl(n,t,e){let r=B(),s=B();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=qt();return e.forEach((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),d.isNoDocument()&&d.version.isEqual(O.min())?(t.removeEntry(c,d.readTime),u=u.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(c,d)):b("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)}),{cs:u,ls:s}})}function Nl(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Qr.allocateTargetId(r).next(u=>(s=new xt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Xr(n,t,e){const r=q(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!nn(u))throw u;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function to(n,t,e){const r=q(n);let s=O.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const A=q(d),R=A.rs.get(_);return R!==void 0?C.resolve(A.ns.get(R)):A.Qr.getTargetData(f,_)}(r,u,wt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(u,c.targetId).next(d=>{o=d})}).next(()=>r.ts.getDocumentsMatchingQuery(u,t,e?s:O.min(),e?o:B())).next(c=>(kl(r,Pc(t),c),{documents:c,hs:o})))}function kl(n,t,e){let r=n.ss.get(t)||O.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class eo{constructor(){this.activeTargetIds=Mc()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ml{constructor(){this.no=new eo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new eo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn=null;function br(){return Vn===null?Vn=function(){return 268435456+Math.round(2147483648*Math.random())}():Vn++,"0x"+Vn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class Fl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,u){const c=br(),d=this.vo(e,r.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${c}:`,d,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,u),this.Mo(e,d,f,s).then(_=>(b("RestConnection",`Received RPC '${e}' ${c}: `,_),_),_=>{throw de("RestConnection",`RPC '${e}' ${c} failed with error: `,_,"url: ",d,"request:",s),_})}xo(e,r,s,o,u,c){return this.Co(e,r,s,o,u)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}vo(e,r){const s=xl[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=br();return new Promise((u,c)=>{const d=new Po;d.setWithCredentials(!0),d.listenOnce(bo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Dn.NO_ERROR:const _=d.getResponseJson();b(dt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Dn.TIMEOUT:b(dt,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Dn.HTTP_ERROR:const A=d.getStatus();if(b(dt,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const k=function(D){const X=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(X)>=0?X:P.UNKNOWN}(V.status);c(new N(k,V.message))}else c(new N(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{b(dt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);b(dt,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,r,15)})}Oo(t,e,r){const s=br(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=ko(),c=No(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new Vo({})),this.Fo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");b(dt,`Creating RPC '${t}' stream ${s}: ${_}`,d);const A=u.createWebChannel(_,d);let R=!1,V=!1;const k=new Ll({lo:D=>{V?b(dt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(b(dt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),R=!0),b(dt,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},ho:()=>A.close()}),L=(D,X,H)=>{D.listen(X,Q=>{try{H(Q)}catch(nt){setTimeout(()=>{throw nt},0)}})};return L(A,$e.EventType.OPEN,()=>{V||(b(dt,`RPC '${t}' stream ${s} transport opened.`),k.mo())}),L(A,$e.EventType.CLOSE,()=>{V||(V=!0,b(dt,`RPC '${t}' stream ${s} transport closed`),k.po())}),L(A,$e.EventType.ERROR,D=>{V||(V=!0,de(dt,`RPC '${t}' stream ${s} transport errored:`,D),k.po(new N(P.UNAVAILABLE,"The operation could not be completed")))}),L(A,$e.EventType.MESSAGE,D=>{var X;if(!V){const H=D.data[0];tt(!!H);const Q=H,nt=Q.error||((X=Q[0])===null||X===void 0?void 0:X.error);if(nt){b(dt,`RPC '${t}' stream ${s} received error:`,nt);const Ct=nt.status;let it=function(m){const y=J[m];if(y!==void 0)return Jo(y)}(Ct),v=nt.message;it===void 0&&(it=P.INTERNAL,v="Unknown error status: "+Ct+" with message "+nt.message),V=!0,k.po(new N(it,v)),A.close()}else b(dt,`RPC '${t}' stream ${s} received:`,H),k.yo(H)}}),L(c,Do.STAT_EVENT,D=>{D.stat===Ur.PROXY?b(dt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Ur.NOPROXY&&b(dt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Dr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n){return new Jc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,r,s,o,u,c,d){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ca(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(bt(e.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bl extends Ul{constructor(t,e,r,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=rl(this.serializer,t),r=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?he(u.readTime):O.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=Zs(this.serializer),e.addTarget=function(o,u){let c;const d=u.target;if(c=zr(d)?{documents:il(o,d)}:{query:sl(o,d)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=tl(o,u.resumeToken);const f=Qr(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(O.min())>0){c.readTime=Zc(o,u.snapshotVersion.toTimestamp());const f=Qr(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=al(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=Zs(this.serializer),e.removeTarget=t,this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,Wr(e,r),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.xo(t,Wr(e,r),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class jl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(bt(e),this.y_=!1):b("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{r.enqueueAndForget(async()=>{an(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=q(d);f.M_.add(4),await on(f),f.N_.set("Unknown"),f.M_.delete(4),await Yn(f)}(this))})}),this.N_=new jl(r,s)}}async function Yn(n){if(an(n))for(const t of n.x_)await t(!0)}async function on(n){for(const t of n.x_)await t(!1)}function la(n,t){const e=q(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),yi(e)?_i(e):Te(e).Xo()&&mi(e,t))}function gi(n,t){const e=q(n),r=Te(e);e.F_.delete(t),r.Xo()&&da(e,t),e.F_.size===0&&(r.Xo()?r.n_():an(e)&&e.N_.set("Unknown"))}function mi(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Te(n).P_(t)}function da(n,t){n.L_.xe(t),Te(n).I_(t)}function _i(n){n.L_=new Qc({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Te(n).start(),n.N_.w_()}function yi(n){return an(n)&&!Te(n).Zo()&&n.F_.size>0}function an(n){return q(n).M_.size===0}function fa(n){n.L_=void 0}async function zl(n){n.N_.set("Online")}async function Gl(n){n.F_.forEach((t,e)=>{mi(n,t)})}async function Kl(n,t){fa(n),yi(n)?(n.N_.D_(t),_i(n)):n.N_.set("Unknown")}async function Hl(n,t,e){if(n.N_.set("Online"),t instanceof ta&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const c of o.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.F_.delete(c),s.L_.removeTarget(c))}(n,t)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ro(n,r)}else if(t instanceof kn?n.L_.Ke(t):t instanceof Zo?n.L_.He(t):n.L_.We(t),!e.isEqual(O.min()))try{const r=await ua(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.L_.rt(u);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.F_.get(f);_&&o.F_.set(f,_.withResumeToken(d.resumeToken,u))}}),c.targetMismatches.forEach((d,f)=>{const _=o.F_.get(d);if(!_)return;o.F_.set(d,_.withResumeToken(gt.EMPTY_BYTE_STRING,_.snapshotVersion)),da(o,d);const A=new xt(_.target,d,f,_.sequenceNumber);mi(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await ro(n,r)}}async function ro(n,t,e){if(!nn(t))throw t;n.M_.add(1),await on(n),n.N_.set("Offline"),e||(e=()=>ua(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Yn(n)})}async function io(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=an(e);e.M_.add(3),await on(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Yn(e)}async function Ql(n,t){const e=q(n);t?(e.M_.delete(2),await Yn(e)):t||(e.M_.add(2),await on(e),e.N_.set("Unknown"))}function Te(n){return n.B_||(n.B_=function(e,r,s){const o=q(e);return o.f_(),new Bl(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:zl.bind(null,n),To:Gl.bind(null,n),Ao:Kl.bind(null,n),h_:Hl.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),yi(n)?_i(n):n.N_.set("Unknown")):(await n.B_.stop(),fa(n))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,c=new Ei(t,e,u,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pa(n,t){if(bt("AsyncQueue",`${t}: ${n}`),nn(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=ze(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.q_=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):x():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class _e{constructor(t,e,r,s,o,u,c,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new _e(t,e,ce.emptySet(e),u,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Kn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Xl{constructor(){this.queries=new ve(t=>$o(t),Kn),this.onlineState="Unknown",this.z_=new Set}}async function Yl(n,t){const e=q(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new Wl,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=pa(u,`Initialization of query '${se(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&vi(e)}async function Jl(n,t){const e=q(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const u=o.U_.indexOf(t);u>=0&&(o.U_.splice(u,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Zl(n,t){const e=q(n);let r=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.U_)c.H_(s)&&(r=!0);u.K_=s}}r&&vi(e)}function td(n,t,e){const r=q(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function vi(n){n.z_.forEach(t=>{t.next()})}var Yr,oo;(oo=Yr||(Yr={})).J_="default",oo.Cache="cache";class ed{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new _e(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=_e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Yr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this.key=t}}class ma{constructor(t){this.key=t}}class nd{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=B(),this.mutatedKeys=B(),this.Ia=zo(t),this.Ta=new ce(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new so,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,A)=>{const R=s.get(_),V=Hn(this.query,A)?A:null,k=!!R&&this.mutatedKeys.has(R.key),L=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let D=!1;R&&V?R.data.isEqual(V.data)?k!==L&&(r.track({type:3,doc:V}),D=!0):this.Ra(R,V)||(r.track({type:2,doc:V}),D=!0,(d&&this.Ia(V,d)>0||f&&this.Ia(V,f)<0)&&(c=!0)):!R&&V?(r.track({type:0,doc:V}),D=!0):R&&!V&&(r.track({type:1,doc:R}),D=!0,(d||f)&&(c=!0)),D&&(V?(u=u.add(V),o=L?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Ta:u,Aa:r,Xi:c,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const u=t.Aa.Q_();u.sort((_,A)=>function(V,k){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return L(V)-L(k)}(_.type,A.type)||this.Ia(_.doc,A.doc)),this.Va(r),s=s!=null&&s;const c=e&&!s?this.ma():[],d=this.Pa.size===0&&this.current&&!s?1:0,f=d!==this.ha;return this.ha=d,u.length!==0||f?{snapshot:new _e(this.query,t.Ta,o,u,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new so,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=B(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new ma(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new ga(r))}),e}pa(t){this.la=t.hs,this.Pa=B();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return _e.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class rd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class id{constructor(t){this.key=t,this.wa=!1}}class sd{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new ve(c=>$o(c),Kn),this.Da=new Map,this.Ca=new Set,this.va=new Y(M.comparator),this.Fa=new Map,this.Ma=new di,this.xa={},this.Oa=new Map,this.Na=me.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function od(n,t,e=!0){const r=Ta(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await _a(r,t,e,!0),s}async function ad(n,t){const e=Ta(n);await _a(e,t,!0,!1)}async function _a(n,t,e,r){const s=await Nl(n.localStore,wt(t)),o=s.targetId,u=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await ud(n,t,o,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&la(n.remoteStore,s),c}async function ud(n,t,e,r,s){n.Ba=(A,R,V)=>async function(L,D,X,H){let Q=D.view.da(X);Q.Xi&&(Q=await to(L.localStore,D.query,!1).then(({documents:v})=>D.view.da(v,Q)));const nt=H&&H.targetChanges.get(D.targetId),Ct=H&&H.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(Q,L.isPrimaryClient,nt,Ct);return uo(L,D.targetId,it.fa),it.snapshot}(n,A,R,V);const o=await to(n.localStore,t,!0),u=new nd(t,o.hs),c=u.da(o.documents),d=sn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=u.applyChanges(c,n.isPrimaryClient,d);uo(n,e,f.fa);const _=new rd(t,e,u);return n.ba.set(t,_),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),f.snapshot}async function hd(n,t,e){const r=q(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(u=>!Kn(u,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xr(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&gi(r.remoteStore,s.targetId),Jr(r,s.targetId)}).catch(ni)):(Jr(r,s.targetId),await Xr(r.localStore,s.targetId,!0))}async function cd(n,t){const e=q(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),gi(e.remoteStore,r.targetId))}async function ya(n,t){const e=q(n);try{const r=await bl(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Fa.get(o);u&&(tt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.wa=!0:s.modifiedDocuments.size>0?tt(u.wa):s.removedDocuments.size>0&&(tt(u.wa),u.wa=!1))}),await va(e,r,t)}catch(r){await ni(r)}}function ao(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,u)=>{const c=u.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const d=q(u);d.onlineState=c;let f=!1;d.queries.forEach((_,A)=>{for(const R of A.U_)R.j_(c)&&(f=!0)}),f&&vi(d)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ld(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let u=new Y(M.comparator);u=u.insert(o,pt.newNoDocument(o,O.min()));const c=B().add(o),d=new Xn(O.min(),new Map,new Y($),u,c);await ya(r,d),r.va=r.va.remove(o),r.Fa.delete(t),Ti(r)}else await Xr(r.localStore,t,!1).then(()=>Jr(r,t,e)).catch(ni)}function Jr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||Ea(n,r)})}function Ea(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(gi(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Ti(n))}function uo(n,t,e){for(const r of e)r instanceof ga?(n.Ma.addReference(r.key,t),dd(n,r)):r instanceof ma?(b("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||Ea(n,r.key)):x()}function dd(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(b("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Ti(n))}function Ti(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new M(K.fromString(t)),r=n.Na.next();n.Fa.set(r,new id(e)),n.va=n.va.insert(e,r),la(n.remoteStore,new xt(wt(jo(e.path)),r,"TargetPurposeLimboResolution",ri.oe))}}async function va(n,t,e){const r=q(n),s=[],o=[],u=[];r.ba.isEmpty()||(r.ba.forEach((c,d)=>{u.push(r.Ba(d,t,e).then(f=>{if((f||e)&&r.isPrimaryClient){const _=f&&!f.fromCache;r.sharedClientState.updateQueryState(d.targetId,_?"current":"not-current")}if(f){s.push(f);const _=pi.Ki(d.targetId,f);o.push(_)}}))}),await Promise.all(u),r.Sa.h_(s),await async function(d,f){const _=q(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>C.forEach(f,R=>C.forEach(R.qi,V=>_.persistence.referenceDelegate.addReference(A,R.targetId,V)).next(()=>C.forEach(R.Qi,V=>_.persistence.referenceDelegate.removeReference(A,R.targetId,V)))))}catch(A){if(!nn(A))throw A;b("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const V=_.ns.get(R),k=V.snapshotVersion,L=V.withLastLimboFreeSnapshotVersion(k);_.ns=_.ns.insert(R,L)}}}(r.localStore,o))}async function fd(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const r=await aa(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(c=>{c.forEach(d=>{d.reject(new N(P.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await va(e,r.us)}}function pd(n,t){const e=q(n),r=e.Fa.get(t);if(r&&r.wa)return B().add(r.key);{let s=B();const o=e.Da.get(t);if(!o)return s;for(const u of o){const c=e.ba.get(u);s=s.unionWith(c.view.Ea)}return s}}function Ta(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ya.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ld.bind(null,t),t.Sa.h_=Zl.bind(null,t.eventManager),t.Sa.ka=td.bind(null,t.eventManager),t}class ho{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ha(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Vl(this.persistence,new Sl,t.initialUser,this.serializer)}createPersistence(t){return new Al(fi.Hr,this.serializer)}createSharedClientState(t){return new Ml}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ao(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fd.bind(null,this.syncEngine),await Ql(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Xl}()}createDatastore(t){const e=ha(t.databaseInfo.databaseId),r=function(o){return new Fl(o)}(t.databaseInfo);return function(o,u,c,d){return new ql(o,u,c,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,u,c){return new $l(r,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ao(this.syncEngine,e,0),function(){return no.D()?new no:new Ol}())}createSyncEngine(t,e){return function(s,o,u,c,d,f,_){const A=new sd(s,o,u,c,d,f);return _&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=q(r);b("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await on(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):bt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=rc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{b("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(b("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=pa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Nr(n,t){n.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await aa(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function co(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ed(n);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>io(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>io(t.remoteStore,s)),n._onlineComponents=t}function yd(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ed(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!yd(e))throw e;de("Error using user provided cache. Falling back to memory cache: "+e),await Nr(n,new ho)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Nr(n,new ho);return n._offlineComponents}async function vd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await co(n,n._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await co(n,new gd))),n._onlineComponents}async function Td(n){const t=await vd(n),e=t.eventManager;return e.onListen=od.bind(null,t.syncEngine),e.onUnlisten=hd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ad.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=cd.bind(null,t.syncEngine),e}function Id(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,c,d,f){const _=new md({next:R=>{u.enqueueAndForget(()=>Jl(o,A)),R.fromCache&&d.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new ed(c,_,{includeMetadataChanges:!0,ra:!0});return Yl(o,A)}(await Td(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function wd(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fo(n){if(M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ad(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function jn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ad(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ia((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jn{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new po({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new po(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wh;switch(r.type){case"firstParty":return new Zh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=lo.get(e);r&&(b("ComponentProvider","Removing Datastore"),lo.delete(e),r.terminate())}(this),Promise.resolve()}}function Rd(n,t,e,r={}){var s;const o=(n=jn(n,Jn))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&de("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=ft.MOCK_USER;else{c=Pu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ft(f)}n._authCredentials=new Xh(new Mo(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new un(this.firestore,t,this._query)}}class Ie{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new le(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ie(this.firestore,t,this._key)}}class le extends un{constructor(t,e,r){super(t,e,jo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ie(this.firestore,null,new M(t))}withConverter(t){return new le(this.firestore,t,this._path)}}function Cd(n,t,...e){if(n=Lu(n),wa("collection","path",t),n instanceof Jn){const r=K.fromString(t,...e);return fo(r),new le(n,null,r)}{if(!(n instanceof Ie||n instanceof le))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(K.fromString(t,...e));return fo(r),new le(n.firestore,null,r)}}function Sd(n,t){if(n=jn(n,Jn),wa("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new un(n,null,function(r){return new rn(K.emptyPath(),r)}(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ca(this,"async_queue_retry"),this.hu=()=>{const e=Dr();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Dr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Dr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Wt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!nn(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(r);throw bt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Ei.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&x()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Aa extends Jn{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Pd}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ra(this),this._firestoreClient.terminate()}}function Vd(n,t){const e=typeof n=="object"?n:Lh(),r=typeof n=="string"?n:t||"(default)",s=kh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Cu("firestore");o&&Rd(s,...o)}return s}function bd(n){return n._firestoreClient||Ra(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ra(n){var t,e,r;const s=n._freezeSettings(),o=function(c,d,f,_){return new fc(c,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Ia(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new _d(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $n(gt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new $n(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}const Nd=new RegExp("[~\\*/\\[\\]]");function kd(n,t,e){if(t.search(Nd)>=0)throw go(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ca(...t.split("."))._internalPath}catch{throw go(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function go(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||u)&&(d+=" (found",o&&(d+=` in field ${r}`),u&&(d+=` in document ${s}`),d+=")"),new N(P.INVALID_ARGUMENT,c+n+d)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Md(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Md extends Sa{data(){return super.data()}}function Pa(n,t){return typeof t=="string"?kd(n,t):t instanceof Ca?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xd{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Gn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Dd(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=si(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ze(t));default:return null}}convertTimestamp(t){const e=Bt(t);return new Et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=K.fromString(t);tt(oa(r));const s=new tn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||bt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ld extends Sa{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Pa("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Mn extends Ld{data(t={}){return super.data(t)}}class Fd{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new bn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Mn(this._firestore,this._userDataWriter,r.key,r,new bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(c=>{const d=new Mn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new Mn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),_=u.indexOf(c.doc.key)),{type:Ud(c.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ud(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class Bd extends xd{constructor(t){super(),this.firestore=t}convertBytes(t){return new $n(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ie(this.firestore,null,e)}}function mo(n){n=jn(n,un);const t=jn(n.firestore,Aa),e=bd(t),r=new Bd(t);return Od(n._query),Id(e,n._query).then(s=>new Fd(t,r,n,s))}(function(t,e=!0){(function(s){Ee=s})(xh),Ln(new Xe("firestore",(r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new Aa(new Yh(r.getProvider("auth-internal")),new ec(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tn(f.options.projectId,_)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ue(Ms,"4.6.3",t),ue(Ms,"4.6.3","esm2017")})();const qd=function(){const t=Ao({apiKey:"AIzaSyBzs4tIXlRqpacvpaFOiNrHbDP87Yzq8Nc",authDomain:"nuts-8372a.firebaseapp.com",projectId:"nuts-8372a",storageBucket:"nuts-8372a.appspot.com",messagingSenderId:"272173015787",appId:"1:272173015787:web:f2fdd4af54fdc9d7d1d4ae",measurementId:"G-L1CKR36B5Q"}),e=Vd(t);async function r(o){const u=Cd(e,o);return(await mo(u)).docs.map(f=>(console.log(f.data()),f.data()))}r("productCard");async function s(){const o=await mo(Sd(e,"productCard")),u=document.querySelectorAll(".card");let c=0;o.forEach(d=>{if(c<u.length){const f=d.data(),_=u[c];_.querySelector(".card__title").textContent=f.productName,_.querySelector(".card__article").textContent="Арт. 00"+f.arcticle,_.querySelector(".card__descr").textContent=f.description;const A=_.querySelectorAll(".card__info-value");A[0].textContent=f.weight+" г.",A[1].textContent=f.package,_.querySelector(".card__price-number").textContent=f.price+" грн",c++}})}s()};document.addEventListener("DOMContentLoaded",function(){hu(),cu(),lu(),fu(),pu(),gu(),mu(),du(),qd()});
