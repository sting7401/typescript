"use strict";
// class => object
// {fr: 'male', zty :'male'}
// {fr2: 'male', zty2 :'female'}
class Sex {
    constructor() {
        this.mark = 'male';
    }
}
const a = new Sex();
a.fr = 'female';
a.zty = 'female';
const b = new Sex();
a.fr2 = 'female';
a.zty2 = 'female';
// 프로퍼티가 동적으로 변형 될 때 이용
