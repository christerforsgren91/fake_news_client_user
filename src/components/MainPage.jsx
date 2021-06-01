import React, { useEffect } from 'react';
import Articles from '../modules/Articles';
import ArticleCard from './ArticleCard';
import BreakingNews from './layout/BreakingNews';
import { useSelector } from 'react-redux';
import CategoryMenu from './layout/CategoryMenu';
import CustomDivider from './CustomDivider';
import PremiumSection from './PremiumSection';
import ArticleRow from './ArticleRow';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

const MainPage = () => {
  const { articles } = useSelector((state) => state);
  const { t } = useTranslation();
  const isSmall = useMediaQuery({ query: '(max-width: 1250px)' });

  useEffect(() => {
    Articles.index();
  }, []);

  let articleList = articles.slice(1, 4).map((article, index) => {
    return <ArticleCard article={article} index={index} key={index} />;
  });

  let articleRows = articles.slice(1).map((article, index) => {
    return <ArticleRow article={article} index={index} key={index} />;
  });

  let premiumList = articles.filter((article) => article.premium === true).slice(0, 3).map((article, index) => {
    return <PremiumSection article={article} key={index} />
  })

  return (
    <>
      <CategoryMenu />
      <BreakingNews firstArticle={articles[0]} />
      <CustomDivider title={t('dividerTopConspiracies')} />
      <div id='articles-container' data-cy='articles-container'>
        {articleList}
      </div>
      <CustomDivider title={t('dividerPremiumArticles')} />
      <div style={isSmall ? smallStyles.container : styles.container}  >{premiumList}</div>
      <CustomDivider title={t('dividerOtherNews')} />
      <div id='category-container'>{articleRows}</div>
    </>
  );
};

export default MainPage;


const styles = {
  container: {
    backgroundColor: '#ffb74d',
    height: 600,
    display: 'flex',
    alignItems: 'center',
    padding: '0 15% 3% 15%',
  },
}

const smallStyles = {
  container: {
    backgroundColor: '#ffb74d',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px 15%',
    width: '100%',
  },
}