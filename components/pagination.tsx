import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationDemo({
  currentPage,
  totalPages,
  link,
}: {
  readonly currentPage: number;
  readonly totalPages: number;
  readonly link: string;
}) {
  return (
    <Pagination className="mb-28">
      <PaginationContent>
        {currentPage > 10 && (
          <PaginationItem>
            <PaginationPrevious href={`${link}&start=${currentPage - 10}`} />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage == 1 ? 1 : 1 + Math.floor(currentPage / 10)}
          </PaginationLink>
        </PaginationItem>
        {currentPage + 10 <= totalPages && (
          <PaginationItem>
            <PaginationNext href={`${link}&start=${currentPage + 10}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
