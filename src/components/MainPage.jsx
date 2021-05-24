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

const MainPage = () => {
  const { articles } = useSelector((state) => state);
  const { t } = useTranslation();

  useEffect(() => {
    Articles.index();
  }, []);

  let articleList = articles.slice(1, 4).map((article, index) => {
    return <ArticleCard article={article} index={index} key={index} />;
  });

  let articleRows = articles.slice(1).map((article, index) => {
    return <ArticleRow article={article} index={index} key={index} />;
  });

  return (
    <>
      <CategoryMenu />
      <BreakingNews firstArticle={articles[0]} />
      <CustomDivider title={t('dividerTopConspiracies')} />
      <div id='articles-container' data-cy='articles-container'>
        {articleList}
      </div>
      <CustomDivider title={t('dividerPremiumArticles')} />
      <PremiumSection />
      <CustomDivider title={t('dividerOtherNews')} />
      <div id='category-container'>{articleRows}</div>
    </>
  );
};

export default MainPage;
