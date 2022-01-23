


window.onload = () => {


    document.querySelector("[widhtValueInput]").setAttribute("value", 10);
    document.querySelector("[barCountInput]").setAttribute("value", 130);

    
    var arr = [];

    var __ = 1;




    function setAllBars(){

        const barsCount = parseInt(document.querySelector("[barCountInput]").value);
        const barWidht = parseInt(document.querySelector("[widhtValueInput]").value);
    for (let i = 0; i < barsCount; i++) {

        var value = Math.random();

        const valueHeight = 500;

        //Create bar 
        var bar = document.createElement("div")

        bar.style.width = barWidht;

        bar.style.height = valueHeight * value;

        bar.style.backgroundColor = "black";

        arr.push(bar)

        document.querySelector("[data-divShower]").appendChild(bar)

        
        //SpaceBetween
        var spaceBetween = document.createElement("div")

        spaceBetween.style.width = 1;

        spaceBetween.style.height = 1;

        document.querySelector("[data-divShower]").appendChild(spaceBetween)
    }    
    }

    setAllBars();


    document.querySelector("[widhtValueInput]").addEventListener("change", function(){
        while (document.querySelector("[data-divShower]").firstChild) {
            document.querySelector("[data-divShower]").removeChild(document.querySelector("[data-divShower]").firstChild);
        }

        arr = []

        setAllBars();
    });


    document.querySelector("[barCountInput]").addEventListener("change", function(){
        while (document.querySelector("[data-divShower]").firstChild) {
            document.querySelector("[data-divShower]").removeChild(document.querySelector("[data-divShower]").firstChild);
        }

        arr = []


        setAllBars();
    });

    document.getElementById("sortButton").addEventListener("click", 
        function onSortButtonClicked(){

                const barsCount = parseInt(document.querySelector("[barCountInput]").value);

                if(__ == barsCount)
                    return
                var _ = 0;

                var checkChangeBar = false;

                arr[_].style.backgroundColor = "gray";

                setTimeout(function test() {

                    try{
                        arr[_+1].style.backgroundColor = "gray";
                    }
                    catch(e){
                        arr[_].style.backgroundColor = "black";
                        if(!checkChangeBar) return;
                        __++;
                        onSortButtonClicked();
                        return;
                    }
                    

                    arr[_].style.backgroundColor = "black";

                    if(arr[_].offsetHeight > arr[_ + 1].offsetHeight)
                    {
                        checkChangeBar = true;
                        var temp = arr[_].offsetHeight;
                        arr[_].style.height = arr[_ + 1].offsetHeight;
                        arr[_ + 1].style.height = temp;
                    }

                    _++;

                    setTimeout(test, 0.1);
                }, 0.1);
            
            
        }, 
        false
    );
}
