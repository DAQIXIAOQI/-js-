window.onload = function () {

    var newLink = createListByHead(10);
    deleteList(newLink);

    //线性表链式整表（长度为num）创建（头插法、尾插法） 
    function createListByTail(num) {
        var list = createNode();
        var pre = list ;
        for (var i = 0; i < num; i++) {
            var newnode = new LinkNode(i+1,pre.next);
            pre.next = newnode;
            list.data += 1 ;
            pre = newnode;  
        }
        console.log("隨機生成的鏈表為:" + JSON.stringify(list));
        return list
    }
    function createListByHead(num) {
        var list = createNode();
       
         for(var i = 0 ; i < num ; i++){
             var newnode = new LinkNode(i+1,list.next);
             list.next = newnode ;
             list.data+=1;
         }
         console.log("隨機生成的鏈表為:" + JSON.stringify(list));
        return list
    }
    //线性表链式整表删除
    function deleteList(list) {
        var p , q ;
        p = list.next;
        
        while(p){
            q = p.next ;
            delete p ;
            p = q;
        }
        
        list.next = null ;
        list.data = 0 ;
        console.log("鏈表為:" + JSON.stringify(list))
    }

    function LinkNode(data, next) {
        this.data = data;
        this.next = next;
    }

    function createNode() {
        var list = new LinkNode(0, null);
        return list;
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
