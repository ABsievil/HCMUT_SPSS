package hcmut.hcmut_spss.DTO.RestfulAPI;
import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UtilityDTO {
    private String semesterId;
    private Integer defaultpage;
    private Date dateReset;
    private Integer pagePrice;
    private Date dateStart;
    private Date dateEnd;
}