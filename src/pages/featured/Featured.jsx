// Featured.jsx file
import "ka-table/style.css";
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { useLoaderData } from "react-router-dom";

const Featured = () => {
  const posts = useLoaderData();
  // Sort the posts based on the length of descriptionDetail in descending order
  const sortedPosts = posts
    .sort((a, b) => b.descriptionDetail.length - a.descriptionDetail.length)
    .slice(0, 10);

  const tableData = sortedPosts.map((post, index) => ({
    serialNumber: index + 1,
    title: post.title,
    name: post.name,
    userPhotoURL: post.userPhotoURL,
  }));

  const columns = [
    { key: "serialNumber", title: "Serial Number", dataType: DataType.Number },
    { key: "title", title: "Title", dataType: DataType.String },
    { key: "name", title: "Name", dataType: DataType.String },
    {
      key: "userPhotoURL",
      title: "User Photo",
      accessor: "userPhotoURL",

      disableFilters: true,

      Cell: (tableProps) => (
        <img
          src={tableProps.row.original.userPhotoURL}
          width={60}
          alt="Player"
        />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={tableData}
      editingMode={EditingMode.Cell}
      rowKeyField={"serialNumber"}
      sortingMode={SortingMode.None}
    />
  );
};

export default Featured;
