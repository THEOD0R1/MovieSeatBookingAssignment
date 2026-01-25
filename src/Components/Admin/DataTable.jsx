import "./DataTable.css";
const DataTable = ({ data, onEdit, onDelete }) => {
  return (
    <table className="data-table">
      <thead className="data-t-head">
        <tr className="data-t-head-row">
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="data-t-body">
        {data?.map((item) => (
          <tr className="data-t-body-row" key={item?.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td className="data-actions">
              <button className="data-edit-button" onClick={() => onEdit(item)}>
                Edit
              </button>
              <button
                className="data-delete-button"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
