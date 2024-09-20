import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Boxoffice = (props) => {
  const imdbUrlTemplate = (rowData) => {
    return (
      <a href={rowData.imdb_url} target="_blank" rel="noopener noreferrer">
        {rowData.imdb_url}
      </a>
    );
  };

  return (
    <div>
      <DataTable value={props.arr} tableStyle={{ minWidth: '50rem' }}>
        <Column field="id" header="ID"  style={{ textAlign: 'center' }}></Column>
        <Column field="movie" header="Movie"   style={{ textAlign: 'center' }}></Column>
        <Column field="rating" header="Rating"   style={{ textAlign: 'center' }}></Column>
        <Column field="image" header="Image"   style={{ textAlign: 'center' }}></Column>
        <Column body={imdbUrlTemplate} header="IMDB URL"   style={{ textAlign: 'center' }}></Column>
      </DataTable>
    </div>
  );
};

export default Boxoffice;
