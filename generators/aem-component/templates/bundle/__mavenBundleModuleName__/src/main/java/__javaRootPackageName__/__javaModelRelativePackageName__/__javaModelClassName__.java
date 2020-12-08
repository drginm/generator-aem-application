package <%= javaRootPackageName %>.<%= javaModelRelativePackageName %>;

import javax.annotation.PostConstruct;

<% if(useSlingModelExporter) { -%>
import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;
<% } else { -%>
import org.apache.sling.api.resource.Resource;
<% } -%>
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


<% if(useSlingModelExporter) { -%>
@Model(adaptables = SlingHttpServletRequest.class,
        adapters = {ComponentExporter.class},
        resourceType = <%= javaModelClassName %>.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
<% } else { -%>
@Model(adaptables = Resource.class)
<% } -%>
public class <%= javaModelClassName %> <% if(useSlingModelExporter) { -%>implements ComponentExporter <% } -%>{
<% if(useSlingModelExporter) { -%>
    protected static final String RESOURCE_TYPE = "<%= componentParentPath %>/<%= componentNodeName %>";

<% } -%>
<% if(fields.includes('includeTextFieldExample')) { -%>
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String text;
<% } -%>
<% if(fields.includes('includeTextAreaExample')) { -%>
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String longText;
<% } -%>
<% if(fields.includes('includeCheckboxExample')) { -%>
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected Boolean checkbox;
<% } -%>
<% if(fields.includes('includePathfieldExample')) { -%>
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String url;
<% } -%>
<% if(fields.includes('includeDropDownExample')) { -%>
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String select;
<% } -%>
<% if(fields.includes('includeImageFieldExample')) { -%>
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String fileReference;
<% } -%>

<% if(fields.includes('includeTextFieldExample')) { -%>
    public String getText() {
        return text;
    }
<% } -%>
<% if(fields.includes('includeTextAreaExample')) { -%>
    public String getLongText() {
        return longText;
    }
<% } -%>
<% if(fields.includes('includeCheckboxExample')) { -%>
    public Boolean isCheckbox() {
        return checkbox;
    }
<% } -%>
<% if(fields.includes('includePathfieldExample')) { -%>
    public String getUrl() {
        return url;
    }
<% } -%>
<% if(fields.includes('includeDropDownExample')) { -%>
    public String getSelect() {
        return select;
    }
<% } -%>
<% if(fields.includes('includeImageFieldExample')) { -%>
    public String getFileReference() {
        return fileReference;
    }
<% } -%>
<% if(useSlingModelExporter) { -%>

    public String getExportedType() {
        return RESOURCE_TYPE;
    }
<% } -%>
}
