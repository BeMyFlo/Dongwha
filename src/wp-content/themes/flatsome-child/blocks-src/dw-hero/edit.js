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
  const {
    smallText,
    title,
    subtitle,
    backgroundImage,
    features,
    primaryBtnText,
    primaryBtnLink,
    secondaryBtnText,
    secondaryBtnLink,
    paddingTop,
    paddingBottom,
  } = attributes;

  const updateFeature = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index].text = value;
    setAttributes({ features: newFeatures });
  };

  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.55)), url(${backgroundImage})`,
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

        <PanelBody title={__('Content Settings', 'dw-blocks')}>
          <TextControl
            label={__('Small Top Text', 'dw-blocks')}
            value={smallText}
            onChange={(val) => setAttributes({ smallText: val })}
          />
          <TextControl
            label={__('Main Title', 'dw-blocks')}
            value={title}
            onChange={(val) => setAttributes({ title: val })}
          />
          <TextareaControl
            label={__('Subtitle', 'dw-blocks')}
            value={subtitle}
            onChange={(val) => setAttributes({ subtitle: val })}
          />
        </PanelBody>

        <PanelBody title={__('Background', 'dw-blocks')} initialOpen={false}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ backgroundImage: media.url })}
              allowedTypes={['image']}
              value={backgroundImage}
              render={({ open }) => (
                <Button onClick={open} variant="secondary">
                  {backgroundImage ? __('Change Image', 'dw-blocks') : __('Select Image', 'dw-blocks')}
                </Button>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody title={__('Features List', 'dw-blocks')} initialOpen={false}>
          {features.map((feature, index) => (
            <TextControl
              key={index}
              label={`${__('Feature', 'dw-blocks')} ${index + 1}`}
              value={feature.text}
              onChange={(val) => updateFeature(index, val)}
            />
          ))}
        </PanelBody>

        <PanelBody title={__('Buttons', 'dw-blocks')} initialOpen={false}>
          <fieldset>
            <legend>{__('Primary Button', 'dw-blocks')}</legend>
            <TextControl
              label={__('Text', 'dw-blocks')}
              value={primaryBtnText}
              onChange={(val) => setAttributes({ primaryBtnText: val })}
            />
            <TextControl
              label={__('Link', 'dw-blocks')}
              value={primaryBtnLink}
              onChange={(val) => setAttributes({ primaryBtnLink: val })}
            />
          </fieldset>
          <fieldset style={{ marginTop: '20px' }}>
            <legend>{__('Secondary Button', 'dw-blocks')}</legend>
            <TextControl
              label={__('Text', 'dw-blocks')}
              value={secondaryBtnText}
              onChange={(val) => setAttributes({ secondaryBtnText: val })}
            />
            <TextControl
              label={__('Link', 'dw-blocks')}
              value={secondaryBtnLink}
              onChange={(val) => setAttributes({ secondaryBtnLink: val })}
            />
          </fieldset>
        </PanelBody>
      </InspectorControls>

      <section className="hero" style={sectionStyle}>
        <div className="container">
          <div className="hero-content">
            <small>{smallText}</small>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="hero-features">
              {features.map((f, i) => (
                <div key={i}>{f.text}</div>
              ))}
            </div>
            <div className="hero-buttons">
              <span className="btn btn-primary">{primaryBtnText}</span>
              <span className="btn btn-outline">{secondaryBtnText}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
