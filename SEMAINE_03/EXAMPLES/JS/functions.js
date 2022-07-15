function store(){

   function next(){
    // LOGIN/PASS
    const test = false ;
        function action(){
            if(test)
                return 1 ;
            
            return 0;
        }

        return action; 
   }
   // ICI
   return next;
}

console.log( store()()() );

const middlewareHistory = store => next => action => {

}