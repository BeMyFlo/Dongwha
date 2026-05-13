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
  const { smallText, title, description, image, listItems, paddingTop, paddingBottom } = attributes;

  const updateListItem = (index, value) => {
    const newList = [...listItems];
    newList[index].text = value;
    setAttributes({ listItems: newList });
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

        <PanelBody title={__('Content', 'dw-blocks')}>
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

        <PanelBody title={__('Image', 'dw-blocks')}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ image: media.url })}
              allowedTypes={['image']}
              value={image}
              render={({ open }) => (
                <Button onClick={open} variant="secondary">
                  {image ? __('Change Image', 'dw-blocks') : __('Select Image', 'dw-blocks')}
                </Button>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody title={__('Checklist Items', 'dw-blocks')}>
          {listItems.map((item, index) => (
            <TextControl
              key={index}
              label={`${__('Item', 'dw-blocks')} ${index + 1}`}
              value={item.text}
              onChange={(val) => updateListItem(index, val)}
            />
          ))}
        </PanelBody>
      </InspectorControls>

      <section className="about-section" style={sectionStyle}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="about-content">
              <span style={{ color: '#70b340', fontWeight: 'bold' }}>{smallText}</span>
              <h2 style={{ fontSize: '42px', marginTop: '10px' }}>{title}</h2>
              <p style={{ color: '#64748b', lineHeight: '1.8', margin: '20px 0' }}>{description}</p>
              <ul className="about-list" style={{ listStyle: 'none', padding: 0 }}>
                {listItems.map((item, i) => (
                  <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#70b340' }}>✔</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} alt="" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
