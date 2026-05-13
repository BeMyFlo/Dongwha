import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
  RangeControl,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { smallText, title, description, products, paddingTop, paddingBottom } = attributes;

  const updateProduct = (index, key, value) => {
    const newProducts = [...products];
    newProducts[index][key] = value;
    setAttributes({ products: newProducts });
  };

  const sectionStyle = {
    paddingTop: `${paddingTop}px`,
    paddingBottom: `${paddingBottom}px`,
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__('Layout Settings', 'dw-blocks')}>
          <RangeControl
            label={__('Padding Top (px)', 'dw-blocks')}
            value={paddingTop}
            onChange={(val) => setAttributes({ paddingTop: val })}
            min={0}
            max={200}
          />
          <RangeControl
            label={__('Padding Bottom (px)', 'dw-blocks')}
            value={paddingBottom}
            onChange={(val) => setAttributes({ paddingBottom: val })}
            min={0}
            max={200}
          />
        </PanelBody>

        <PanelBody title={__('Section Title', 'dw-blocks')}>
          <TextControl
            label={__('Small Text', 'dw-blocks')}
            value={smallText}
            onChange={(val) => setAttributes({ smallText: val })}
          />
          <TextControl
            label={__('Title', 'dw-blocks')}
            value={title}
            onChange={(val) => setAttributes({ title: val })}
          />
          <TextareaControl
            label={__('Description', 'dw-blocks')}
            value={description}
            onChange={(val) => setAttributes({ description: val })}
          />
        </PanelBody>
      </InspectorControls>

      <section style={sectionStyle}>
        <div className="container">
          <div className="section-title">
            <span>{smallText}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => updateProduct(index, 'image', media.url)}
                    allowedTypes={['image']}
                    value={product.image}
                    render={({ open }) => (
                      <div className="product-image-edit" onClick={open} style={{ cursor: 'pointer', background: '#f0f0f0', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {product.image ? <img src={product.image} alt="" style={{ height: '100%', objectFit: 'cover' }} /> : __('Select Image', 'dw-blocks')}
                      </div>
                    )}
                  />
                </MediaUploadCheck>
                <div className="product-content">
                  <TextControl
                    label={__('Product Title', 'dw-blocks')}
                    value={product.title}
                    onChange={(val) => updateProduct(index, 'title', val)}
                  />
                  <TextareaControl
                    label={__('Product Description', 'dw-blocks')}
                    value={product.desc}
                    onChange={(val) => updateProduct(index, 'desc', val)}
                  />
                  <TextControl
                    label={__('Link', 'dw-blocks')}
                    value={product.link}
                    onChange={(val) => updateProduct(index, 'link', val)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
