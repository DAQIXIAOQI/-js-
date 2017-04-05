window.onload = function () {

    /*--------------------循环链表---------------------*/

    var newlist = createCycListByTail(10);
    deleteCycList(newlist);
    printfCyclist(newlist);
   // printfCyclist(newlist);
    //线性表循环链表初始化（长度为num）
    function createCycListByTail(num) {
        var list = createCycNode();
        var pre = list;
        for (var i = 0; i < num; i++) {
            var newnode = new LinkNode(i + 1, list);
            pre.next = newnode;
            list.data += 1;
            pre = newnode;
        }
        printfCyclist(list);
        return list
    }
    //这种删除机制感觉会有问题，其他节点仍存在于内存中，但因为没有其他对象对于它们的引用，应该会被浏览器自动回收。也有另一种方法，就是每次都从链表头一直遍历到尾部，释放最后一个节点的内存，然后再从头部循环到尾部释放最后一个节点的内存，但感觉这样性能消耗会比较大。所以就先让浏览器自动回收，后面想到另外的方法再来修改吧！
    function deleteCycList(list){
       list.next = list ;
       list.data = 0 ;
    }
    
    function printfCyclist(list) {
        var pre = list;
        console.log("-----------------循环链表为：------------------");
        while (1) {
            console.log(pre.data);
            if (pre.next == list) {
                pre = pre.next;
                console.log(pre.data);
                return
            } else {
                pre = pre.next;
            }
        }
    }

    function createCycNode() {
        var list = new LinkNode(0, null);
        list.next = list;
        return list

    }

    /*---------------------单链表---------------------*/
    //快慢指针获取中间值
    function getMidItem(list) {
        var fast = slow = list.next;

        if (list.next == null) {
            console.log("此链表为空链表不存在中间值");
            return false
        }
        //fast.next用于单数情况，fast.next.next用于双数情况
        while (fast.next && fast.next.next) {

            fast = fast.next.next;
            slow = slow.next;

        }
        console.log(slow.data);
        return slow.data;
    }

    //线性表单链式整表（长度为num）创建（头插法、尾插法） 
    function createListByTail(num) {
        var list = createNode();
        var pre = list;
        for (var i = 0; i < num; i++) {
            var newnode = new LinkNode(i + 1, pre.next);
            pre.next = newnode;
            list.data += 1;
            pre = newnode;
        }
        console.log("隨機生成的鏈表為:" + JSON.stringify(list));
        return list
    }

    function createListByHead(num) {
        var list = createNode();

        for (var i = 0; i < num; i++) {
            var newnode = new LinkNode(i + 1, list.next);
            list.next = newnode;
            list.data += 1;
        }
        console.log("隨機生成的鏈表為:" + JSON.stringify(list));
        return list
    }
    //线性表单链式整表删除
    function deleteList(list) {
        list.next = null;
        list.data = 0;
    }

    function createSingleNode() {
        var list = new LinkNode(0, null);
        return list;
    }

    /*--------------------通用方法----------------------*/
    
    
    function LinkNode(data, next) {
        this.data = data;
        this.next = next;
    }
    function getItem(list, index) {
        var obj = list.next;
        var j = 1;
        //一直循环直到index
        while (obj && j < index) {
            ++j;
            obj = obj.next;
        }
        if (!obj || j > index) {
            console.log("元素不存在");
            return
        }
        return obj;
    }
    function insertItem(link, index, data) {
        var obj = link;
        var j = 1;
        while (obj && j < index) {
            j++;
            obj = obj.next;
        }
        while (!obj || j > index) {
            console.log("輸入的索引有誤");
            return
        }
        var newItem = new LinkNode(data, obj.next);
        obj.next = newItem;
        link.data += 1;
    }
    //刪除第index個元素，返回值為刪除的元素
    function deleteItem(link, index) {
        var j = 1;
        var obj = link.next;
        while (obj.next && j < index) {
            ++j;
            obj = obj.next;
        }
        if (!(obj.next) || j > index) {
            console.log("要刪除的元素不存在");
            return
        }

        var item = obj.next;
        obj.next = item.next;
        link.data -= 1;
        return item
    }

}
