import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'
import {AvForm,AvField} from 'availity-reactstrap-validation'
function UserModal({isopen,toggle,save,current}) {
    return(
        <div>
            <Modal isOpen={isopen} toggle={toggle}>
                <ModalHeader>
                    Add User
                </ModalHeader>
                <ModalBody>
                    <AvForm id={'form'} onValidSubmit={save} model={current ? current: {} }>
                        <AvField label={'Name'} className={'my-3'}  name={'name'} required />
                        <AvField label={'UserName'} className={'my-3'}  name={'username'} required />
                        <AvField label={'Email'} className={'my-3'}  name={'email'} required />
                        <AvField label={'Address'} className={'my-3'}  name={'address'} required />
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

export default UserModal