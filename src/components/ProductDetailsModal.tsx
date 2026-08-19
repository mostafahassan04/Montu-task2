import React, { useState } from "react";
import { Modal, Tag, Rate, Typography, Descriptions, Divider, List, Avatar, Flex } from "antd";
import { type Product } from "@/api/productsApi";

const { Text, Title, Paragraph } = Typography;

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailsModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.thumbnail);

  return (
    <Modal
      open={!!product}
      onCancel={onClose}
      footer={null}
      width={720}
      centered
      destroyOnClose
    >
      <div className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="flex flex-col items-center">
            <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center p-4 mb-3 border border-slate-200">
              <img
                src={activeImage}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto w-full pb-2">
                {product.images.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`Thumb ${idx}`}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`w-14 h-14 object-cover rounded cursor-pointer border-2 transition ${
                      activeImage === imgUrl ? "border-sky-500" : "border-slate-200"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Core Info */}
          <div className="flex flex-col justify-between">
            <div>
              <Text type="secondary" className="uppercase text-xs font-semibold">
                {product.brand || product.category} • SKU: {product.sku || "N/A"}
              </Text>
              <Title level={4} style={{ marginTop: 4, marginBottom: 8 }}>
                {product.title}
              </Title>

              <Flex align="center" gap={8} className="mb-3">
                <Rate disabled allowHalf defaultValue={product.rating} style={{ fontSize: 14 }} />
                <Text type="secondary">({product.rating})</Text>
                <Tag color={product.stock <= 5 ? "volcano" : "green"}>
                  {product.availabilityStatus || `${product.stock} in stock`}
                </Tag>
              </Flex>

              <Paragraph type="secondary" className="text-xs leading-relaxed">
                {product.description}
              </Paragraph>
            </div>

            {/* Price Box */}
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <Flex align="baseline" gap={8}>
                <Text className="text-2xl font-bold text-sky-600">
                  ${product.price.toFixed(2)}
                </Text>
                {product.discountPercentage && (
                  <Tag color="red">-{product.discountPercentage}% OFF</Tag>
                )}
              </Flex>
            </div>
          </div>
        </div>

        <Divider style={{ margin: "16px 0" }} />

        {/* Specifications */}
        <Descriptions title="Product Specifications" size="small" column={{ xs: 1, sm: 2 }}>
          <Descriptions.Item label="Warranty">{product.warrantyInformation || "Standard"}</Descriptions.Item>
          <Descriptions.Item label="Shipping">{product.shippingInformation || "Standard"}</Descriptions.Item>
          <Descriptions.Item label="Return Policy">{product.returnPolicy || "30 Days"}</Descriptions.Item>
          {product.dimensions && (
            <Descriptions.Item label="Dimensions">
              {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
            </Descriptions.Item>
          )}
        </Descriptions>

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <>
            <Divider style={{ margin: "16px 0" }} />
            <Text strong className="text-sm block mb-3">Customer Reviews ({product.reviews.length})</Text>
            <List
              itemLayout="horizontal"
              dataSource={product.reviews}
              renderItem={(review) => (
                <List.Item style={{ padding: "8px 0" }}>
                  <List.Item.Meta
                    avatar={<Avatar>{review.reviewerName[0]}</Avatar>}
                    title={
                      <Flex justify="space-between" align="center">
                        <Text strong className="text-xs">{review.reviewerName}</Text>
                        <Rate disabled defaultValue={review.rating} style={{ fontSize: 10 }} />
                      </Flex>
                    }
                    description={<Text type="secondary" className="text-xs">{review.comment}</Text>}
                  />
                </List.Item>
              )}
            />
          </>
        )}
      </div>
    </Modal>
  );
};