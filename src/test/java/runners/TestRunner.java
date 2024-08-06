package runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/",
        glue = {"steps"},
        plugin = {
                "pretty",
                "json:target/cucumber-reports/Cucumber.json",
                "html:target/cucumber-reports"
        },
        snippets = SnippetType.CAMELCASE,
        dryRun = false,
        strict = true
)
public class TestRunner {

    @BeforeClass
    public static void reset() {
        // Any setup before the tests run, if necessary
    }
}
