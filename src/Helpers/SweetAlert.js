import Swal from 'sweetalert2'

export function sweetAlert() { 
    
    const successAlert = (title, text) => {
        Swal.fire({  
            title: title,  
            text: text,
            icon: 'success'
          }); 
    }
    
    const questionAlert = () => {
        Swal.fire({  
            title: 'Do you have a problem to solve?!',  
            text: 'Ask us on dirask',
            icon: 'question'
          }); 
    }
    
    const customImageAlert = () => {
      Swal.fire({
        text: "your custom image",
        imageUrl: 'https://i.ibb.co/LktzszD/dirask.png'
      });
    }

    const dialogAlertWithButtons = () => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    async function confirmDialog (title, text, nameAction, actionReady) {
        let confirm = await Swal.fire({
            title: title,
            text: text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    nameAction,
                    actionReady,
                    'success'
                )
                return true;
            } else {
                return false;
            }
          })
        return confirm;
    }

    const errorAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }

    return {
        successAlert,
        questionAlert,
        customImageAlert,
        dialogAlertWithButtons,
        confirmDialog,
        errorAlert

    }

}