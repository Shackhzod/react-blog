import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'
import {AvForm,AvField} from 'availity-reactstrap-validation'

function ComentModal({isopen,toggle,save,current}) {
    return(
        <div>
            <Modal isOpen={isopen} toggle={toggle}>
                <ModalHeader>
                    Add Coment
                </ModalHeader>
                <ModalBody>
                    <AvForm id={'form'} onValidSubmit={save} model={current ? current: {} }>
                        <AvField label={'name'} className={'my-3'}  name={'name'} required />
                        <AvField label={'email'} className={'my-3'}  name={'email'} required />
                        <AvField label={'body'} type={'textarea'}  name={'body'} required />

                    </AvForm>


                </ModalBody>
                <ModalFooter>
                    <button form={'form'} className={'btn btn-success my-2'}> save</button>
                    <button className={'btn btn-danger'} onClick={toggle}> cancel</button>
                </ModalFooter>

            </Modal>

        </div>
    )


}


export default ComentModal
