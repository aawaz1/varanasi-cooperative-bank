const BranchDetails = () => {
    const branches = [
      {
        id: 1,
        name: "Head Office, Collectrate Compound Mirzapur",
        pin: 231001,
        contactPerson: "Sri A.P.Agrawal (CEO)",
        contactNo: "8188065071",
        email: "ceo@dcbmirzapur.com",
      },
      {
        id: 2,
        name: "City, Waselyganj Mirzapur",
        pin: 231001,
        contactPerson: "Sri Vijay Shankar Mishra",
        contactNo: "8188065087",
        email: "",
      },
      {
        id: 3,
        name: "Sadar, Collectrate Compound Mirzapur",
        pin: 231001,
        contactPerson: "Sri Vijay Kant Tripathi",
        contactNo: "8188065088",
        email: "",
      },
      // ... Add all other branch details similarly
      {
        id: 4,
        name: "Anapara, Sonebhadra",
        pin: 231225,
        contactPerson: "Sri Moh Asalam",
        contactNo: "8188065086",
        email: "",
      },
    ];
  
    return (
      <div className="w-full overflow-x-auto bg-zinc-900 p-3 rounded-md">
      <table className="min-w-full  text-white border-collapse border border-gray-400 text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="border border-gray-400 px-4 py-2">S. No.</th>
            <th className="border border-gray-400 px-4 py-2">Branch Name & Address</th>
            <th className="border border-gray-400 px-4 py-2">Pin</th>
            <th className="border border-gray-400 px-4 py-2">Contact Person</th>
            <th className="border border-gray-400 px-4 py-2">Contact No</th>
            <th className="border border-gray-400 px-4 py-2">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch, index) => (
            <tr key={branch.id} className={index % 2 === 0 ? "bg-gray-800" : "bg-zinc-900"}>
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{branch.name}</td>
              <td className="border border-gray-400 px-4 py-2">{branch.pin}</td>
              <td className="border border-gray-400 px-4 py-2">{branch.contactPerson}</td>
              <td className="border border-gray-400 px-4 py-2">{branch.contactNo}</td>
              <td className="border border-gray-400 px-4 py-2">{branch.email || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    
    );
  };
  
  export default BranchDetails;
  