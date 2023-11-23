let arr = [];
let num = arr.join('');
class keys{
    static zero(){
        arr.push(0)
        return arr.join('') ;
    }
    static one(){
        arr.push(1)
        return arr.join('') ;
    }
    static two(){
        arr.push(2)
        return arr.join('');
    }
    static three(){
        arr.push(3)
        return arr.join('');
    }
    static four(){
        arr.push(4)
        return arr.join('') ;
    }
    static five(){
        arr.push(5)
        return arr.join('') ;
    }
    static six(){
        arr.push(6)
        return arr.join('') ;
    }
    static seven(){
        arr.push(7)
        return arr.join('') ;
    }
    static eight(){
        arr.push(8)
        return arr.join('') ;
    }
    static nine(){
        arr.push(9)
        return arr.join('') ;
    }
    static point(){
        
        if (arr.length !== 0){
            arr.push('.')
            return arr.join('') ;
        }
        return '' ;
        
        
    }
    static plus(){
        if (arr.length !== 0){
            arr.push('+')
            return arr.join('') ;
        }
        return '' ;
        
    }
    static minus(){
        if (arr.length !== 0){
            arr.push('-')
            return arr.join('') ;
        }
        return '' ;
    }
    static multiplication(){
        if (arr.length !== 0){
            arr.push('*')
            return arr.join('') ;
        }
        return '';
    }
    static divide(){
        if (arr.length !== 0){
            arr.push('/')
            return arr.join('') ;
        }
        return '';
    }
    static remove(){
        arr.pop()
        return arr.join('');
    } 

    static clear(){
        arr = [];
        return arr;
    }
    
    static equals (){
        let str = arr.join('');
        let ans = eval(str);
        arr = [ans]
        return ans;
    }

    static sqr(){
        let str = arr.join('');
        let sln = eval(str)*eval(str);
        arr = [sln]
        return sln;
    }
    
    static sqrt(){
        let str =arr.join('');
        let sln = Math.sqrt(eval(str));
        arr = [sln]
        return sln;
    }

    static round(){
        let str =arr.join('');
        let sln = Math.round(eval(str));
        arr = [sln]
        return sln;
    }

    static exp(){
        let str =arr.join(''); 
        let sln = Math.exp(eval(str));
        arr = [sln]
        return sln;
    }

    
}

