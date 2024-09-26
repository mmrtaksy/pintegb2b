import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function BankAccounts({ title }) {
  return (

    <Table aria-label="bank accounts list table" shadow="none" className="w-full">
      <TableHeader>
        <TableColumn>Şube</TableColumn>
        <TableColumn>Şube Kodu</TableColumn>
        <TableColumn>Hesap No</TableColumn>
        <TableColumn>IBAN Numarası</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>	BEYKENT TİCARİ </TableCell>
          <TableCell>	1604 </TableCell>
          <TableCell>	6299877 </TableCell>
          <TableCell>		TR30 0006 2001 6040 0006 2998 77 </TableCell>
        </TableRow>
      </TableBody>
    </Table>

  );
}