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
import React, {useEffect} from "react";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {getHospital, Updatedata} from "../Api";

export function UpdatedDoctor() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [data, setdata] = useState([]);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const {id} = useParams();

  const [doc, setDoc] = useState({
    name: "",
    hospital: "",
    spec: "",
    salary: 0,
  });
  console.log(id, "fgg");
  function handleChange(e) {
    const {name, value, type} = e.target;

    const val = type === "number" ? Number(value) : value;
    setDoc({
      ...doc,
      [name]: val,
    });
  }
  useEffect(() => {
    getHospital().then((res) => setdata(res.data));
  }, []);
  function handleupdate(id, doc) {

    console.log(id,doc,"fsadtgadg")
   
    Updatedata(id,doc).then(res=>console.log(res))
  }

  return (
    <>
      <Button onClick={onOpen}>Update </Button>

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
                handleupdate(id, doc);
                onClose();
              }}
              colorScheme="blue"
              mr={3}
            >
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
