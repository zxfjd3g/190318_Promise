/* 
Promise类模块
*/
(function (window) {

  /* 
  Promise类
  */
  class Promise {
    /* 
    Promise构造器
    */
    constructor (excutor) {

    }

    /* 
    用来指定成功和失败回调函数的方法
    */
    then (onResolved, onRejected) {

    }

    /* 
    用来指定失败回调函数的方法
    */
    catch (onRejected) {

    }

    /* 
    用来返回一个成功的promise的静态方法
    */
    static resolve (value) {

    }

    /* 
    用来返回一个失败的promise的静态方法
    */
    static reject (reason) {

    }

    /* 
    用来返回一个promise的静态方法
      所有的promises都成功, 返回的promise才成功
      只要有一个失败了, 返回的promise就失败了
    */
    static all (promises) {

    }

    /* 
    用来返回一个promise的静态方法
    第一个确定结果的promise来决定返回promise结果
    */
    static race (promises) {

    }
  }

  // 暴露Promise
  window.Promise = Promise
})(window)