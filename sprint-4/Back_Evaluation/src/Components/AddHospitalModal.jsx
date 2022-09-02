import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React, {useContext, useState} from "react";
import {DataContextp} from "../AddContext/DataContext";
import {addHospital} from "../Api";

export function Hospital({handleHospitaldata}) {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  // const {handleHospitaldata}=useContext(DataContextp)
  //   start from here
  const [form, setForm] = useState({
    Hname: "",
    Haddress: "",
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
  console.log(form);
  // const {handleHospitaldata} =useContext(DataContext)

 

  return (
    <>
      <Button onClick={onOpen}>Add Hospital </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Add Hospital</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Hospital name</FormLabel>
              <Input
                ref={initialRef}
                value={form.Hname}
                name="Hname"
                onChange={handleChange}
                placeholder="Hospital name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Hospital Adress </FormLabel>
              <Input
                onChange={handleChange}
                // value={form.Haddress}
                name="Haddress"
                placeholder="Address name"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                handleHospitaldata(form);
                onClose();
              }}
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
