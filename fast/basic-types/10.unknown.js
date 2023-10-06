"use strict";
// 에러 const aNumber: number = maybe;
//console.log('🚀 ~ file: 10.unknown.ts:4 ~ aNumber:', aNumber);
if (maybe === true) {
    const aBoolean = maybe;
    console.log('🚀 ~ file: 10.unknown.ts:7 ~ aBoolean:', aBoolean);
    // maybe는 boolean이므로, 에러 const aString: string = maybe;
    //console.log('🚀 ~ file: 10.unknown.ts:11 ~ aString:', aString);
}
if (typeof maybe === 'string') {
    const aString = maybe;
    console.log('🚀 ~ file: 10.unknown.ts:16 ~ aString:', aString);
    // maybe는 string이므로, 에러 const aBoolean: boolean = maybe;
    //console.log('🚀 ~ file: 10.unknown.ts:18 ~ aBoolean:', aBoolean);
}
