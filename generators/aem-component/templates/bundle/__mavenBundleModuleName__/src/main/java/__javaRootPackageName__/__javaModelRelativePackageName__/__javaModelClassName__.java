package <%= javaRootPackageName %>.<%= javaModelRelativePackageName %>;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


@Model(adaptables = Resource.class)
public class <%= javaModelClassName %> {
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
}
