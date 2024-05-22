function atiq() {
    let TableNumber = document.querySelector("#table-start")
    let TableRange = document.querySelector("#table-end")
    let ParaInner = document.querySelector("#p-inner")

    if (TableNumber.value === "" && TableRange.value === "") {
        let timerInterval;
        Swal.fire({
            title: "Error: Unable to generate table. Please provide input data.",
            html: "I will close in <b></b> milliseconds.",
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    } else {
        for (let i = 1; i <= TableRange.value; i++) {
            ParaInner.innerText += ` ${TableNumber.value}   x  ${i} = ${TableNumber.value * i
                } \n`;
        }
    }

    TableNumber.value = "";
    TableRange.value = "";
}



