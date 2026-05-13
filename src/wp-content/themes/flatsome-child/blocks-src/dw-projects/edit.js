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
  Button,
  RangeControl,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { smallText, title, projects, paddingTop, paddingBottom } = attributes;

  const updateProject = (index, key, value) => {
    const newProjects = [...projects];
    newProjects[index][key] = value;
    setAttributes({ projects: newProjects });
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
        </PanelBody>
      </InspectorControls>

      <section style={sectionStyle}>
        <div className="container">
          <div className="section-title">
            <span>{smallText}</span>
            <h2>{title}</h2>
          </div>

          <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {projects.map((proj, index) => (
              <div className="project-item-edit" key={index} style={{ position: 'relative' }}>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => updateProject(index, 'image', media.url)}
                    allowedTypes={['image']}
                    value={proj.image}
                    render={({ open }) => (
                      <div onClick={open} style={{ cursor: 'pointer', background: '#f0f0f0', height: '250px' }}>
                        {proj.image ? <img src={proj.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : __('Select Image', 'dw-blocks')}
                      </div>
                    )}
                  />
                </MediaUploadCheck>
                <TextControl
                  value={proj.title}
                  onChange={(val) => updateProject(index, 'title', val)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
