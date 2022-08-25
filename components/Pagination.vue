<template>
 <div
   v-if="length > 1"
   class="list-item list-item-nav"
 >
    <button
        class="btn btn-prev"
        @click="$router.push(`?${query}=${now - 1 || 1}`)"
    >
        戻る
    </button>
    <ul class="list">
        <li
            :class="{ now: now === 1 }"
            class="item item-link"
            @click="$router.push(`?${query}=1`)"
        >
            <span class="text">
                1
            </span>
        </li>

     <template v-if="length > 2">
       <template v-if="length <= 5">
         <li
           :class="{ now: now === 2 }"
           class="item item-link"
           @click="$router.push(`?${query}=2`)"
         >
           <span class="text">
             2
           </span>
         </li>

         <template v-if="length > 3">
           <li
             :class="{ now: now === 3 }"
             class="item item-link"
             @click="$router.push(`?${query}=3`)"
           >
             <span class="text">
               3
             </span>
           </li>

           <template v-if="length > 4">
             <li
               :class="{ now: now === 4 }"
               class="item item-link"
               @click="$router.push(`?${query}=4`)"
             >
               <span class="text">
                 4
               </span>
             </li>
           </template>
         </template>
       </template>

       <template v-else>
         <template v-if="now < 4">
           <li
             :class="{ now: now === 2 }"
             class="item item-link"
             @click="$router.push(`?${query}=2`)"
           >
             <span class="text">
               2
             </span>
           </li>
           <li
             :class="{ now: now === 3 }"
             class="item item-link"
             @click="$router.push(`?${query}=3`)"
           >
             <span class="text">
               3
             </span>
           </li>
           <li

             v-if="now === 3"
             class="item item-link"
             @click="$router.push(`?${query}=4`)"
           >
             <span class="text">
               4
             </span>
           </li>
           <li class="item item-dots">
             <div class="dot" />
             <div class="dot" />
             <div class="dot" />
           </li>
         </template>

         <template v-else-if="length <= now + 2">
           <li class="item item-dots">
             <div class="dot" />
             <div class="dot" />
             <div class="dot" />
           </li>

           <li
             v-if="now === length - 2"
             class="item item-link"
             @click="$router.push(`?${query}=${length - 3}`)"
           >
             <span class="text">
               {{ length - 3 }}
             </span>
           </li>
           <li
             :class="{ now: now === length - 2 }"
             class="item item-link"
             @click="$router.push(`?${query}=${length - 2}`)"
           >
             <span class="text">
               {{ length - 2 }}
             </span>
           </li>
           <li
             :class="{ now: now === length - 1 }"
             class="item item-link"
             @click="$router.push(`?${query}=${length - 1}`)"
           >
             <span class="text">
               {{ length - 1 }}
             </span>
           </li>
         </template>

         <template v-else>
           <li class="item item-dots">
             <div class="dot" />
             <div class="dot" />
             <div class="dot" />
           </li>
           <li
             class="item item-link"
             @click="$router.push(`?${query}=${now - 1}`)"
           >
             <span class="text">
               {{ now - 1 }}
             </span>
           </li>
           <li class="item item-link now">
             <span class="text">
               {{ now }}
             </span>
           </li>
           <li
             class="item item-link"
             @click="$router.push(`?${query}=${now + 1}`)"
           >
             <span class="text">
               {{ now + 1 }}
             </span>
           </li>
           <li class="item item-dots">
             <div class="dot" />
             <div class="dot" />
             <div class="dot" />
           </li>
         </template>
       </template>
     </template>
     <li
       :class="{ now: now === length }"
       class="item item-link"
       @click="$router.push(`?${query}=${length}`)"
     >
       <span class="text">
         {{ length }}
       </span>
     </li>
   </ul>
   <button
     class="btn btn-next"
     @click="$router.push(`?${query}=${now + 1 <= length ? now + 1 : length}`)"
   >
     進む
   </button>
 </div>
</template>

<script>
export default {
 props: {
   query: {
     type: String,
     required: true,
   },
   length: {
     type: Number,
     required: true,
   },
   now: {
     type: Number,
     required: true,
   },
 },
}
</script>
