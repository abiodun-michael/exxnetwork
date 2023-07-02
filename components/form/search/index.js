import { SearchWrapper, SearchInput, IconWrapper } from './style';
import { SearchIcon } from 'icons';

const Index = () => {
  return (
    <SearchWrapper>
      <IconWrapper>
        <SearchIcon width={20} height={20} />
      </IconWrapper>
      <SearchInput type="search" placeholder="Search" />
    </SearchWrapper>
  );
};

export default Index;
