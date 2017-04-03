window.onload = function(){
    
     var newLink = createRandomList(10);
    //随机生成长度为num的链表（不包括头部）
    function createRandomList(num){
        var list = createNode();
        for(var i = 0 ; i < num ; i++){
            insertItem(list,1,Math.round(Math.random()*10));
        }
        console.log("隨機生成的鏈表為:" + JSON.stringify(list));
        return list 
    }
    
    
    function LinkNode(data,next){
        this.data = data ;
        this.next = next ;
    }
    function createNode(){
        var list = new LinkNode(0,null);
        return list ;
    }
    function getItem(list,index){
       var obj = list.next ;
       var j = 1 ;
       //一直循环直到index
       while(obj&&j<index){
           ++j;
           obj=obj.next;
       }
       if(!obj||j>index){
           console.log("元素不存在");
           return
       }
       return obj ;    
    }     
    function insertItem(link,index,data){
        var obj = link ;
        var j = 1 ;
        while(obj&&j<index){
            j++;
            obj=obj.next;
        }
        while(!obj||j>index){
            console.log("輸入的索引有誤");
            return 
        } 
        var newItem = new LinkNode(data,obj.next);
        obj.next = newItem ;
        link.data += 1 ;
    }
    //刪除第index個元素，返回值為刪除的元素
    function deleteItem(link,index){
        var j = 1 ;
        var obj = link.next ;
        while(obj.next&&j<index){
            ++j;
            obj = obj.next;
        }
        if(!(obj.next)||j>index){
            console.log("要刪除的元素不存在");
            return
        }
        
        var item = obj.next ; 
        obj.next = item.next;
        link.data -= 1 ;
        return item
    }
    
}