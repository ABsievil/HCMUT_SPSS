package hcmut.hcmut_spss.DTO.RestfulAPI;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateNewPasswordDTO {
    private String username;
    private String newPassword;
}
