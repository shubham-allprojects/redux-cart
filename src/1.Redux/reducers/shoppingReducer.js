import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "Brown eggs",
            type: "dairy",
            desc: "Raw organic brown eggs in a basket",
            img: "https://cdn.backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/02/brown-eggs.jpg",
            price: 28,
            rating: 4
        },
        {
            id: 2,
            title: "Sweet fresh stawberry",
            type: "fruit",
            desc: "Sweet fresh stawberry on the wooden table",
            img: "https://5.imimg.com/data5/MJ/IM/MY-41645336/sweet-strawberry-500x500.jpg",
            price: 29,
            rating: 4
        },
        {
            id: 3,
            title: "Asparagus",
            type: "vegetable",
            desc: "Asparagus with ham on the wooden table",
            img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/08/03/133396.jpeg",
            price: 18,
            rating: 3
        },
        {
            id: 4,
            title: "Green smoothie",
            type: "dairy",
            desc: "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
            img: "https://www.liveeatlearn.com/wp-content/uploads/2017/03/how-to-make-a-green-smoothie-6-social.jpg",
            price: 17,
            rating: 4
        },
        {
            id: 5,
            title: "Raw legums",
            type: "vegetable",
            desc: "Raw legums on the wooden table",
            img: "https://www.wildoats.com/wp-content/uploads/2015/11/beanspicWOblog.jpg",
            price: 17,
            rating: 2
        },
        {
            id: 6,
            title: "Baking cake",
            type: "dairy",
            desc: "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
            img: "https://www.biggerbolderbaking.com/wp-content/uploads/2016/02/BBB113-Vanilla-Celebration-Cake-FINAL.jpg",
            price: 11,
            rating: 4
        },
        {
            id: 7,
            title: "Pesto with basil",
            type: "vegetable",
            desc: "Italian traditional pesto with basil, chesse and oil",
            img: "https://www.thespruceeats.com/thmb/WRYEt-y9ClgCrnT36aqizbFqldc=/2999x1687/smart/filters:no_upscale()/classic-basil-pesto-sauce-recipe-995923-7-7-5b0da18c3de4230037252e43.jpg",
            price: 18,
            rating: 2
        },
        {
            id: 8,
            title: "Hazelnut in black ceramic bowl",
            type: "vegetable",
            desc: "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
            img: "https://s3.envato.com/files/24ab584a-8cdd-4c0b-af58-d11b9f7c935e/inline_image_preview.jpg",
            price: 27,
            rating: 0
        },
        {
            id: 9,
            title: "Fresh stawberry",
            type: "fruit",
            desc: "Sweet fresh stawberry on the wooden table",
            img: "https://sc01.alicdn.com/kf/HTB1_oCmjF9gSKJjSspbq6zeNXXa6/920486141/HTB1_oCmjF9gSKJjSspbq6zeNXXa6.jpg_.webp",
            price: 29,
            rating: 4
        },
        {
            id: 10,
            title: "Lemon and salt",
            type: "fruit",
            desc: "Rosemary, lemon and salt on the table",
            img: "https://previews.123rf.com/images/nicemyphoto/nicemyphoto1804/nicemyphoto180400028/99915420-lemon-and-sea-salt-beauty-treatment-with-organic-cosmetics-with-lemon-ingredients-on-wood-and-rosema.jpg",
            price: 16,
            rating: 5
        }
    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Get Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;
