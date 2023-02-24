import React from "react";

const ClientsPage = () => {
  const clients = [
    { id: "jiwon", name: "jiwon" },
    { id: "leon", name: "leon" },
  ];
  return (
    <>
      <div>ClientsPage</div>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientsPage;
