var h1=document.createElement("h1")

document.body.append(h1)

setTimeout(function(){
    document.querySelector('h1').innerHTML=`Counter :${10}`

    setTimeout(function(){
        document.querySelector('h1').innerHTML=`Counter :${9}`

        setTimeout(function(){
            document.querySelector('h1').innerHTML=`Counter :${8}`

            setTimeout(function(){
                document.querySelector('h1').innerHTML=`Counter :${7}`

                setTimeout(function(){
                    document.querySelector('h1').innerHTML=`Counter :${6}`

                    setTimeout(function(){
                        document.querySelector('h1').innerHTML=`Counter :${5}`

                        setTimeout(function(){
                            document.querySelector('h1').innerHTML=`Counter :${4}`

                            setTimeout(function(){
                                document.querySelector('h1').innerHTML=`Counter :${3}`

                                setTimeout(function(){
                                    document.querySelector('h1').innerHTML=`Counter :${2}`

                                    setTimeout(function(){
                                        document.querySelector('h1').innerHTML=`Counter :${1}`

                                        setTimeout(function(){
                                            document.querySelector('h1').innerHTML=`Happy Independence Day`


                                    },1000)

                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)

            },1000)
        },1000)
    },1000)

},1000)

