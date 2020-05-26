import React from 'react';

import propTypes from 'prop-types';
import { Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const BookItem = (props) => {
    const {
        item: { coverUrl, title, description, _id },
    } = props;
    return (
        <Card
            hoverable
            style={{ width: 300 }}
            size='small'
            cover={<img alt="book-cover" src={coverUrl} />}
            actions={[<ShoppingCartOutlined />]}
        >
            <Meta title={title} description={description} />
        </Card>
    );
}

BookItem.propTypes = {
    item: propTypes.shape({
        title: propTypes.string.isRequired,
        description: propTypes.string,
        coverUrl: propTypes.string.isRequired,
        _id: propTypes.string.isRequired,
    }),
};

export default BookItem;
