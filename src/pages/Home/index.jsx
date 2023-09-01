import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/store/module/home/slice';
function Home() {
    const count = useSelector(state => state.count.value);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="wrap">
                <span>多语言</span>
                <p>{t('footer.detail')}</p>
                <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
                    {i18n.language === 'en' ? '切换成中文' : '切换成英文'}
                </button>
                <span>状态库</span>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>加加</button>
                <button onClick={() => dispatch(decrement())}>减减</button>
                <button onClick={() => dispatch(incrementByAmount(3))}>自定义</button>
            </div>
        </>
    );
}

export default Home;
