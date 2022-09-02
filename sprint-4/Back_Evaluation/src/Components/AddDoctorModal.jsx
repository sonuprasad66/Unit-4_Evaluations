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
  Select,
} from "@chakra-ui/react";
import React from "react";
import {useState} from "react";

export function AddDoctor({data, handleSave}) {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [doc, setDoc] = useState({
    name: "",
    hospital: "",
    spec: "",
    salary: 0,
  });

  function handleChange(e) {
    const {name, value, type} = e.target;

    const val = type === "number" ? Number(value) : value;
    setDoc({
      ...doc,
      [name]: val,
    });
  }
  // console.log(doc);
  return (
    <>
      <Button onClick={onOpen}>Add Doctor </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>doctor name</FormLabel>
              <Input
                ref={initialRef}
                name="name"
                onChange={handleChange}
                placeholder="First name"
              />
            </FormControl>

            <FormControl mt={4}>
              <Select
                onChange={handleChange}
                name="hospital"
                placeholder="Select option"
              >
                {data?.map((hos) => (
                  <option key={hos.id} value={hos.Hname}>
                    {hos.Hname}
                  </option>
                ))}

                {/* <option value="option2">Option 2</option>
                <option value="option3">Option 3</option> */}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <Select
                onChange={handleChange}
                name="spec"
                placeholder="specilia.... "
              >
                <option value="mbbs">mbbs 1</option>
                <option value="react">react mania 2</option>
                <option value="albert">albert </option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>salary</FormLabel>
              <Input
                onChange={handleChange}
                name="salary"
                value={doc.salary}
                type="number"
                placeholder="salary"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                handleSave(doc);

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
