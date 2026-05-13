import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, RangeControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { smallText, title, features, paddingTop, paddingBottom } = attributes;

  const updateFeature = (index, key, value) => {
    const newFeatures = [...features];
    newFeatures[index][key] = value;
    setAttributes({ features: newFeatures });
  };

  const sectionStyle = {
    background: '#00552b',
    paddingTop: `${paddingTop}px`,
    paddingBottom: `${paddingBottom}px`,
    color: '#fff',
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
        </PanelBody>
      </InspectorControls>

      <section className="blue-section" style={sectionStyle}>
        <div className="container">
          <div className="section-title">
            <span style={{ color: '#f0f9eb' }}>{smallText}</span>
            <h2 style={{ color: 'white' }}>{title}</h2>
          </div>

          <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '40px', textAlign: 'center' }}>
            {features.map((feature, index) => (
              <div className="feature-box" key={index}>
                <TextControl
                  label={`${__('Title', 'dw-blocks')} ${index + 1}`}
                  value={feature.title}
                  onChange={(val) => updateFeature(index, 'title', val)}
                />
                <TextareaControl
                  label={`${__('Description', 'dw-blocks')} ${index + 1}`}
                  value={feature.desc}
                  onChange={(val) => updateFeature(index, 'desc', val)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
