import InfiniteScroll from "react-infinite-scroll-component";

function InfinitePagination({
  children,
  dataLength,
  next,
  hasMore,
  isFetchingMore,
  inverse = false,
  showEndMessage = true,
  showLoader = true,
}) {
  return (
    <>
      <InfiniteScroll
        dataLength={dataLength}
        next={next}
        hasMore={hasMore}
        loader={
          showLoader ? (
            <h4>{isFetchingMore ? "Loading More..." : "Loading..."}</h4>
          ) : null
        }
        endMessage={
          showEndMessage ? (
            dataLength > 10 ? (
              <h4>You have reached the end</h4>
            ) : null
          ) : null
        }
        inverse={inverse}
      >
        {children}
      </InfiniteScroll>
    </>
  );
}

export default InfinitePagination;
