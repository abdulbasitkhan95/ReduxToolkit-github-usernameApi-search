import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Search from "./components/Search";
import Results from "./components/Results";
import { showMessage } from "./global/utils"
import { useState, useEffect } from "react";
import { useGetSearchQuery } from "./redux/services/search.service";
import DataValidation from "./components/DataValidation";
import ReactPaginate from 'react-paginate';

function App() {
  const [searchData, setSearchData] = useState('');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(9);

  const { data, isError, error, isLoading, refetch } = useGetSearchQuery({
    searchData,
    page,
    count
  });

  useEffect(() => {
    if (error?.status === 'FETCH_ERROR') showMessage('API Fetching Problem')
  }, [error]);

  const getSearch = async e => {
    setPage(1)
    setSearchData(e.search)
  }

  const handlePageClick = (e) => {
    setPage(e.selected + 1)
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="mainBann">
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <h1>Github</h1>
              <p>Search Users by their username</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="detail-sec">
        <Container>
          <Row>
            <Col md="12">
              <div className="box">
                <div className="box-header d-flex justify-content-center">
                  <Search inputDataHook={getSearch} />
                </div>
                <div className="box-detail">
                  <DataValidation data={data?.items} isError={isError} isLoading={isLoading}>
                    {
                      data?.items.map((item, key) => <Results key={item.id} single={item} />)
                    }
                  </DataValidation>
                </div>
                <div className="pagination">
                  {
                    data?.total_count && <ReactPaginate
                      pageCount={Math.ceil(data?.total_count / count)}
                      breakLabel="..."
                      nextLabel="Next"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      previousLabel="Previous"
                      renderOnZeroPageCount={null}
                    />
                  }
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
