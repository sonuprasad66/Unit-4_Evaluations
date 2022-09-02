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
import {Link, useParams} from "react-router-dom";
import {fetchdoctors, singledoc} from "../Api";
import {UpdatedDoctor} from "./Update";

export function SingleData() {
  const [data, setdata] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetchdata(params.id);
  }, [params.id]);

  const fetchdata = (id) => {
    singledoc({id}).then((res) => setdata(res.data));
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
              {/* <Th>view ModalOverlay</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{data.id}</Td>
              <Td>{data.name}</Td>
              <Td>{data.hospital}</Td>
              <Td>{data.spec}</Td>
              <Td>{data.salary}</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>
                <Button>
                  {" "}
                  <Link to="/doctor">GoBack</Link>{" "}
                </Button>
              </Th>
              <Th>
                {" "}
                <UpdatedDoctor />{" "}
              </Th>
              <Th>
                <Button>Delete</Button>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
