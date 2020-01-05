import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Paginator, PagePrev, PageItem, PageNext } from './styles';

export default function Pagination({
  align,
  onLoadPage,
  page,
  totalPage,
  sizePagination,
}) {
  const [itens, setItens] = useState([]);
  const [pageSelected, setPageSelected] = useState(1);

  useMemo(() => {
    const size = totalPage < sizePagination ? totalPage : sizePagination;
    const currentPage = page || 1;

    let start = 1;
    let length = size;

    if (currentPage > size) {
      start = currentPage - size;
      length = start + size;
    }

    const fill = [];
    for (let number = start; number <= length; number++) {
      fill.push(number);
    }

    setItens(fill);

    setPageSelected(page);
  }, [page, totalPage, sizePagination]);

  function handleLoadPage(currentPage) {
    setPageSelected(currentPage);
    onLoadPage(currentPage);
  }

  function handlePrevPage() {
    if (pageSelected === 1) return;

    const prevPage = pageSelected - 1;

    setPageSelected(prevPage);
    handleLoadPage(prevPage);
  }

  function handleNextPage() {
    if (pageSelected === totalPage) return;

    const nextPage = pageSelected + 1;

    setPageSelected(nextPage);
    handleLoadPage(nextPage);
  }

  return (
    <Paginator align={align}>
      {pageSelected > 1 && (
        <PagePrev title="Anterior" onClick={handlePrevPage}>
          <MdKeyboardArrowLeft size={24} />
        </PagePrev>
      )}

      {itens.map((item, index) => (
        <PageItem
          key={String(index)}
          active={item === pageSelected}
          onClick={() => handleLoadPage(item)}
        >
          {item}
        </PageItem>
      ))}

      {pageSelected < totalPage && (
        <PageNext title="Próxima" onClick={handleNextPage}>
          <MdKeyboardArrowRight size={24} />
        </PageNext>
      )}
    </Paginator>
  );
}

Pagination.defaultProps = {
  align: 'center',
  sizePagination: 7,
};

Pagination.propTypes = {
  align: PropTypes.string,
  onLoadPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  sizePagination: PropTypes.number,
};
