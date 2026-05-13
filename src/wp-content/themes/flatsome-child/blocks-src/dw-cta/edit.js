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
  const { title, subtitle, btnText, btnLink, backgroundImage, paddingTop, paddingBottom } = attributes;

  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: `${paddingTop}px`,
    paddingBottom: `${paddingBottom}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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
            max={300}
          />
          <RangeControl
            label={__('Padding Bottom (px)', 'dw-blocks')}
            value={paddingBottom}
            onChange={(val) => setAttributes({ paddingBottom: val })}
            min={0}
            max={300}
          />
        </PanelBody>

        <PanelBody title={__('Content', 'dw-blocks')}>
          <TextControl
            label={__('Title', 'dw-blocks')}
            value={title}
            onChange={(val) => setAttributes({ title: val })}
          />
          <TextareaControl
            label={__('Subtitle', 'dw-blocks')}
            value={subtitle}
            onChange={(val) => setAttributes({ subtitle: val })}
          />
          <TextControl
            label={__('Button Text', 'dw-blocks')}
            value={btnText}
            onChange={(val) => setAttributes({ btnText: val })}
          />
          <TextControl
            label={__('Button Link', 'dw-blocks')}
            value={btnLink}
            onChange={(val) => setAttributes({ btnLink: val })}
          />
        </PanelBody>

        <PanelBody title={__('Background', 'dw-blocks')}>
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
      </InspectorControls>

      <section className="cta-section" style={sectionStyle}>
        <div className="glass-card" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(15px)', padding: '60px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.2)', maxWidth: '800px', color: '#fff' }}>
          <h2 style={{ fontSize: '42px', color: '#fff' }}>{title}</h2>
          <p style={{ margin: '20px 0 40px', fontSize: '18px' }}>{subtitle}</p>
          <span className="btn btn-primary" style={{ background: '#70b340', padding: '18px 40px', borderRadius: '12px', fontWeight: 'bold' }}>{btnText}</span>
        </div>
      </section>
    </div>
  );
}
