import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
 
  Button,
} from "@chakra-ui/react";
import {useEffect} from "react";
import {useState} from "react";
import {fetchdoctors} from "../Api";
import {Link} from "react-router-dom"

export function DoctorFormTAble() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    fetchdoctors().then((res) => setdata(res.data));
  };

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>id </Th>
              <Th>Doctor name</Th>
              <Th>hospital</Th>
              <Th>specliazation</Th>
              <Th>salary</Th>
              <Th>view ModalOverlay</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((e) => (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.name}</Td>
                <Td>{e.hospital}</Td>
                <Td>{e.spec}</Td>
                <Td>{e.salary}</Td>
                <Td>
                  <Link to={`/doctor/${e.id}`}>View more</Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
