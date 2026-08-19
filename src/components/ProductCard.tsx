import React from 'react';
import { Card, Tag, Rate, Typography, Flex } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  brand?: string;
  availabilityStatus?: string;
  thumbnail: string;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <Card
      hoverable
      onClick={onClick}
      style={{ width: 280 }}
      cover={
        <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '12px' }}>
          <img
            alt={product.title}
            src={product.thumbnail}
            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
            draggable={false}
          />
        </div>
      }
    >
      <Flex justify="space-between" align="center" style={{ marginBottom: 8 }}>
        <Text type="secondary" style={{ fontSize: 12, textTransform: 'uppercase', fontWeight: 600 }}>
          {product.brand || product.category}
        </Text>
        <Tag color={product.stock <= 5 ? 'volcano' : 'green'}>
          {product.availabilityStatus || `${product.stock} left`}
        </Tag>
      </Flex>

      <Meta
        title={<span style={{ fontSize: 15, fontWeight: 600 }}>{product.title}</span>}
        description={
          <Text type="secondary" ellipsis={{ rows: 2 }} style={{ fontSize: 12 }}>
            {product.description}
          </Text>
        }
      />

      <Flex justify="space-between" align="center" style={{ marginTop: 16 }}>
        <div>
          <Text strong style={{ fontSize: 18, color: '#0958d9' }}>
            ${product.price.toFixed(2)}
          </Text>
          {product.discountPercentage && (
            <Tag color="red" style={{ marginLeft: 6, fontSize: 10 }}>
              -{product.discountPercentage}%
            </Tag>
          )}
        </div>

        <Flex align="center" gap={4}>
          <Rate disabled allowHalf defaultValue={product.rating} style={{ fontSize: 12 }} />
          <Text type="secondary" style={{ fontSize: 12 }}>
            {product.rating}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductCard;