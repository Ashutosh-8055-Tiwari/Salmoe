import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { clearAllFilter, setFilterCategory } from '../../model/reducer/productFilterReducer';
import { setCategory, setSelectedCategory } from '../../model/reducer/categoryReducer';


const Card = ({ imageUrl, altText, title, onClick }) => {
  return (
    <div className="cardClasses" onClick={onClick}> 
    {/* <img src={logo.src} className='logoclass'/> */}
    <img src={imageUrl} alt={altText} className="imageClasses" />
    <p className='titleclass'>  {title}</p>
      
      <div className="overlayClasses">
      
        <h2 className="titleClasses ">VIEW ALL</h2>
        {/* <p className="subtitleClasses">{subtitle}</p> */}
      </div>
    </div>
  );
};

const CategorySection = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const { t } = useTranslation();
  const shop = useSelector(state => state.shop);
  const categories = shop?.shop?.categories || []; 
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;


  const selectCategory = (category) => {
    
    dispatch(clearAllFilter());
    dispatch(setFilterCategory({ data: category.id }));
    if (category?.has_child) {
      navigate.push(`${base_url}/category/${category.slug}`);
      dispatch(setSelectedCategory(category));
    } else {
      navigate.push(`${base_url}/categories/${category.slug}`);
    }
  };

  return (
    <div className='cardContainermainClasses'>
    {/* <h1>Buy Fresh Rainbow Trout From Pristine Streams of Kashmir</h1> */}
   <div className=''>
   {/* <h3 className="subtitle1">
    Discover Our <span>  </span><span className="highlight">Categories</span>
  </h3> */}
  </div>
    <div className="cardContainerClasses">
      {categories?.map((ctg, index) => (
        <div  key={index}>
          <Card
            onClick={() => selectCategory(ctg)}
            imageUrl={ctg.image_url}
            altText={ctg.subtitle}
            title={ctg.name}
            
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default CategorySection;
